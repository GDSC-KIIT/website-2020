import { mocked } from 'ts-jest/utils';

import useSWR from 'swr';

jest.mock('swr', () => jest.fn());

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

// describe('the useUser hook works |', () => {
// 	const mockedUseSWR = mocked(useSWR);
// 	beforeEach(() => {
// 		mockedUseSWR.mockReturnValue({ error: undefined, data: undefined });
// 	});
// });

declare module 'swr' {
	export default function (): { data: any; error: any };
}
