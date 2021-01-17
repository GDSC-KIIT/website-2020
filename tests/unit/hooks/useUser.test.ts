import { mocked } from 'ts-jest/utils';
import { renderHook } from '@testing-library/react-hooks';
import useUser from '@/hooks/useUser';

import useSWR from 'swr';

jest.mock('swr', () => jest.fn());
jest.mock('@/lib/user/getUser');

// or const mockedUseSWR = swr.default as jest.Mock;
// or const mockedUseSWR = mocked(swr.default);  // mocked is from ts-jest/utils

it('returns user and the loading state', () => {
	const mockedUseSWR = mocked(useSWR).mockImplementation((): any => ({
		error: undefined,
		data: undefined,
	}));

	expect(mockedUseSWR().data).toBeUndefined();
	expect(mockedUseSWR().error).toBeUndefined();

	mockedUseSWR.mockReturnValue({ error: null, data: { message: 'response' } });

	expect(mockedUseSWR().data).toHaveProperty('message');

	expect('abc').toMatch(/ABc/gi);
});

describe('the useUser hook works |', () => {
	const mockedUseSWR = mocked(useSWR);
	beforeEach(() => {
		mockedUseSWR.mockReturnValue({ error: undefined, data: undefined });
	});

	it('loading is true when both data and error are undefined', () => {
		const { result } = renderHook(() => useUser());
		expect(result.current.loading).toEqual(true);
	});

	it('loading is false when data is defined', () => {
		mockedUseSWR.mockReturnValue({ error: undefined, data: { message: 'response' } });
		const { result } = renderHook(() => useUser());

		expect(result.current.loading).toEqual(false);
	});

	it('loading is false when error is defined and data is undefined', () => {
		mockedUseSWR.mockReturnValue({ error: { message: 'forbidden error' }, data: undefined });
		const { result } = renderHook(() => useUser());

		expect(result.current.loading).toEqual(false);
	});

	it('user is present when data is defined', () => {
		mockedUseSWR.mockReturnValue({ error: null, data: { username: 'test-user' } });
		const { result } = renderHook(() => useUser());

		expect(result.current.user).toMatchObject({ username: 'test-user' });
	});
});

declare module 'swr' {
	export default function (): { data: any; error: any };
}
