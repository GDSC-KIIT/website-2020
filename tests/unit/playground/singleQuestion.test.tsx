import { render, waitFor, act } from '@testing-library/react';
import { logger, testUtils } from '../../utils';
import { mocked } from 'ts-jest/utils';

import Question from '@/playground/components/question';
const useRouter = jest.spyOn(require('next/router'), 'useRouter');
import { getUserInfo } from '@/lib/user/getUser';

jest.mock('@/lib/user/session');
jest.mock('@/lib/user/getUser', () => ({
	__esModule: true,
	getUserInfo: jest.fn(),
}));

describe('next router is called', () => {
	beforeAll(() => {
		useRouter.mockImplementation(() => ({ query: { play: '10' } }));
		logger(
			'info',
			'console.log statements',
			'we have not yet mocked the other functionalities'
		);
	});

	it('the useRouter function is called', () => {
		render(<Question />);
		act(() => {
			expect(useRouter).toHaveBeenCalled();
			expect(useRouter).toHaveReturnedWith({ query: { play: '10' } });
		});
	});
});

describe('user is taken into account', () => {
	beforeAll(() => {
		mocked(getUserInfo).mockResolvedValue(testUtils.mockUser);
	});
	it('the user info is called', () => {
		render(<Question />);
		act(() => {
			expect(getUserInfo).toHaveBeenCalled();
		});
	});
});
