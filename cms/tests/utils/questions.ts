export const mockQuestion1: IQuestionData = {
	qname: 'biology',
	question: '*what is biology?*',
	answer: 4,
	accepting: true,
	option_1: 'animal',
	option_2: 'plant',
	option_3: 'micobe',
	option_4: 'all of these',
};

export const mockQuestion2: IQuestionData = {
	qname: 'can we ask',
	question: '# can we ask questions?',
	answer: 2,
	accepting: true,
	option_1: 'yes',
	option_2: 'no',
};

export const mockQuestion3: IQuestionData = {
	qname: 'can we ask',
	question: 'when does the event start?',
	answer: 1,
	accepting: true,
	option_1: '1',
	option_2: '2',
	option_3: '3',
	option_4: '4',
};

export interface IQuestionData {
	qname: string;
	accepting: boolean;
	answer: number;
	question: string;
	option_1: string;
	option_2: string;
	option_3?: string;
	option_4?: string;
	option_5?: string;
	option_6?: string;
}
