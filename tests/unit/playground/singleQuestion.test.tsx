import { configure, cleanup, render, waitFor, act, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { logger, testUtils } from '../../utils';
import { mocked } from 'ts-jest/utils';

import mockAxios, { AxiosRequestConfig } from 'axios';
import Question from '@/playground/components/question';
const useRouter = jest.spyOn(require('next/router'), 'useRouter');

configure({ asyncUtilTimeout: 2000, testIdAttribute: 'data-testid' });

beforeEach(() => {
	useRouter.mockImplementation(() => ({ query: { play: '10' } }));

	mocked(mockAxios).mockImplementation(
		(config: any): Promise<any> => {
			/**config will be an AxiosRequestConfig,
			 * This happens when the default axios function is being called
			 *
			 * Also if an axios instance was called, then the instance will point to the mocked axios default function
			 * The baseURL or other properites declared in the axios created instance will be invisible
			 * the Promise.resolve has to be made on the remaining config
			 */
			const rqConfig: AxiosRequestConfig = config;

			// url for http://localhost:9000/quizzes/10
			if (rqConfig.url === '/quizzes/10') {
				logger('info', 'quizzes/10 was called');
				return Promise.resolve({ data: testUtils.mockedQuestion1 });
			}
			// url for http://localhost:9000/scores/5
			else if (rqConfig.url === '/5') {
				logger('info', 'scores/5 was called');
				return Promise.resolve({ data: testUtils.mockScoreData });
			} else if (
				rqConfig.url === 'http://localhost:9000/scores' &&
				rqConfig.method === 'POST' &&
				rqConfig.data
			) {
				logger('info', 'scores/ POST was called');
				let correct = false;
				let message = 'wrong answer';

				if (rqConfig.data.ans === 4) {
					correct = true;
					message = 'correct answer';
				}

				return Promise.resolve({
					data: { ...testUtils.mockSubmitResponse, correct, message },
				});
			}
			logger('info', 'other method was called', 'check the below request config');
			console.info(rqConfig);
			return Promise.reject('URL was not called');
		}
	);

	mocked(mockAxios.get).mockImplementation((url, config) => {
		if (url === 'http://localhost:9000/users/me') {
			logger('info', 'users/me was called');
			return Promise.resolve({ data: testUtils.mockUser });
		} else if (url === '/api/session') {
			return Promise.resolve({ data: { auth_token: 'user-jwt-token' } });
		}
		return Promise.resolve();
	});
});

afterEach(() => {
	jest.resetAllMocks();
	cleanup();
});

describe('next router is called', () => {
	it('the useRouter function is called', () => {
		render(<Question />);
		act(() => {
			expect(useRouter).toHaveBeenCalled();
			expect(useRouter).toHaveReturnedWith({ query: { play: '10' } });
		});
	});
});

describe('question is visible', () => {
	it('option 1 is visible', async () => {
		const { getByText } = render(<Question />);
		await waitFor(() => {
			expect(getByText(testUtils.mockedQuestion1.option_1)).toBeInTheDocument();
		});
	});

	it('the question is visible', async () => {
		const { getByText } = render(<Question />);

		await waitFor(() => {
			expect(getByText(/what is biology/gi)).toBeInTheDocument();
		});
	});
});

describe('options are present', () => {
	it('the form control is enabled', async () => {
		const { getByTestId } = render(<Question />);
		await waitFor(() => {
			expect(getByTestId('form-options')).toBeEnabled();
		});
	});

	it('4 radio buttons are present', async () => {
		const { findAllByTestId } = render(<Question />);
		const opts = await findAllByTestId('question-options');
		expect(opts).toHaveLength(4);
	});

	it('radios are enabled', async () => {
		const { findAllByRole } = render(<Question />);
		const radios = await findAllByRole('radio');
		expect(radios[2]).not.toBeDisabled();
	});

	it('options are disabled if question is not accepting responses', async () => {
		mocked(mockAxios).mockImplementation(
			(config: any): Promise<any> => {
				if (config.url === '/quizzes/10') {
					return Promise.resolve({
						data: { ...testUtils.mockedQuestion1, accepting: false },
					});
				}
				return Promise.resolve();
			}
		);

		const { getAllByRole } = render(<Question />);
		await waitFor(() => {
			const radios = getAllByRole('radio');
			expect(radios[2]).toBeDisabled();
		});
	});

	it('options are disabled if user has already solved the question', async () => {
		mocked(mockAxios).mockImplementation(
			(config: any): Promise<any> => {
				if (config.url === '/5') {
					return Promise.resolve({
						data: {
							...testUtils.mockScoreData,
							quizzes: [testUtils.mockSolvedQuestion3, testUtils.mockedQuestion1],
						},
					});
				}
				return Promise.resolve();
			}
		);
		const { getAllByRole } = render(<Question />);
		await waitFor(() => {
			const radios = getAllByRole('radio');
			expect(radios[2]).toBeDisabled();
		});
	});

	it('none of the options are selected', async () => {
		const { findAllByTestId } = render(<Question />);
		const opts = await findAllByTestId('question-options');
		act(() => {
			opts.forEach((opt) => {
				const radio = opt.querySelector('input[type="radio"]');
				expect(radio).not.toBeChecked();
			});
		});
	});
});

describe('user interaction', () => {
	it('submit button is initially disabled', () => {
		const { getByTestId } = render(<Question />);
		expect(getByTestId('answer-submit-button')).toBeDisabled();
		logger(
			'info',
			'ignore the act warning in this case',
			'our assertion is true before state updates'
		);
	});

	it('submit button becomes enabled', async () => {
		const { getByTestId } = render(<Question />);
		await waitFor(() => {
			expect(getByTestId('answer-submit-button')).toBeEnabled();
		});
	});

	it('blank answer cannot be submitted', async () => {
		// the button should be still enabled

		const { findByTestId } = render(<Question />);
		const button = await findByTestId('answer-submit-button');

		act(() => {
			userEvent.click(button);
		});

		expect(button).toBeEnabled();
	});

	it('all the options can be selected', async () => {
		const { findAllByTestId } = render(<Question />);
		const opts = await findAllByTestId('question-options');

		await waitFor(() => {
			opts.forEach((opt) => {
				const radio = opt.querySelector('input[type="radio"]');
				userEvent.click(opt);
				expect(radio).toBeChecked();
			});
		});
	});

	it('submitting the correct answer shows correct answer', async () => {
		const { findAllByTestId, findByTestId } = render(<Question />);
		const opts = await findAllByTestId('question-options');
		const button = await findByTestId('answer-submit-button');

		act(() => {
			userEvent.click(opts[3]); // select the correct option 4
		});

		act(() => {
			userEvent.click(button);
		});

		await waitFor(() => {
			expect(screen.getByTestId('snack-message')).toHaveTextContent(/correct answer/gi);
		});
	});

	it('submitting the wrong answer shows wrong answer', async () => {
		const { findAllByTestId, findByTestId } = render(<Question />);
		const opts = await findAllByTestId('question-options');
		const button = await findByTestId('answer-submit-button');

		act(() => {
			userEvent.click(opts[1]); // select the wrong option 2
		});

		act(() => {
			userEvent.click(button);
		});

		await waitFor(() => {
			expect(screen.getByTestId('snack-message')).toHaveTextContent(/wrong answer/gi);
		});
	});
});
