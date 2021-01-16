export const question1 = {
	question: '*what is biology?*',
	answer: 4,
	accepting: true,
	option_1: 'animal',
	option_2: 'plant',
	option_3: 'micobe',
	option_4: 'all of these',
};

export const question2 = {
	question: '# can we ask questions?',
	answer: 2,
	accepting: true,
	option_1: 'yes',
	option_2: 'no',
};

export const question3 = {
	question: 'when does the event start?',
	answer: 1,
	accepting: true,
	option_1: '1',
	option_2: '2',
	option_3: '3',
	option_4: '4',
};

// Mocks useRouter
const useRouter = jest.spyOn(require('next/router'), 'useRouter');

export function mockNextUseRouter(props: {
	route?: string;
	pathname?: string;
	query?: Object | string;
	asPath?: string;
}) {
	useRouter.mockImplementation(() => ({
		route: props.route,
		pathname: props.pathname,
		query: props.query,
		asPath: props.asPath,
	}));
}
