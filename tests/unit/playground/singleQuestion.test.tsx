import { configure, cleanup, render, waitFor, act } from '@testing-library/react';
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
			}
			logger('info', 'other method was called');
			console.info(rqConfig);
			return Promise.resolve();
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

	it('the question is visible and displayed in markdown', async () => {
		const { getByText } = render(<Question />);

		await waitFor(() => {
			expect(getByText(/what is biology/gi)).toBeInTheDocument();
		});
	});
});

describe('options are present', () => {
	it('4 radio buttons are present', async () => {
		const { getAllByTestId } = render(<Question />);
		await waitFor(() => {
			const opts = getAllByTestId('question-options');
			expect(opts).toHaveLength(4);
		});
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
});
