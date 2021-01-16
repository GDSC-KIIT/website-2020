import { cleanup, render, waitFor, act } from '@testing-library/react';
import { logger, testUtils } from '../../utils';
import { mocked } from 'ts-jest/utils';

import mockAxios, { AxiosRequestConfig } from 'axios';
import Question from '@/playground/components/question';
const useRouter = jest.spyOn(require('next/router'), 'useRouter');

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

			if (rqConfig.url === '/quizzes/10') {
				logger('info', 'quizzes/10 was called');
				return Promise.resolve({ data: testUtils.mockedQuestion1 });
			}
			logger('info', 'other method was called');
			console.info(rqConfig.url);
			return Promise.resolve();
		}
	);

	mocked(mockAxios.get).mockImplementation((url, config) => {
		if (url === 'http://localhost:9000/users/me') {
			logger('info', 'users/me was called');
			return Promise.resolve({ data: testUtils.mockUser });
		} else if (url === '/api/session') {
			return Promise.resolve({ data: { auth_token: 'user-jwt-token' } });
		} else if (url === 'http://localhost:9000/quizzes/10') {
			logger('info', 'the question was fetched');
			return Promise.resolve(testUtils.mockedQuestion1);
		}
		return Promise.resolve();
	});
});

afterEach(() => {
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
});
