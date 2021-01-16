import { QuestionType, ScoreDataType, UserInfoType } from '@/types/index';

export const createdQuestion1 = {
	question: '*what is biology?*',
	answer: 4,
	accepting: true,
	option_1: 'animal',
	option_2: 'plant',
	option_3: 'micobe',
	option_4: 'all of these',
};

export const createdQuestion2 = {
	question: '# can we ask questions?',
	answer: 2,
	accepting: true,
	option_1: 'yes',
	option_2: 'no',
};

export const createdQuestion3 = {
	question: 'when does the event start?',
	answer: 1,
	accepting: true,
	option_1: '1',
	option_2: '2',
	option_3: '3',
	option_4: '4',
};

export const mockedQuestion1: QuestionType = {
	id: 10,
	question: '*what is biology?*',
	accepting: true,
	option_1: 'animal',
	option_2: 'plant',
	option_3: 'micobe',
	option_4: 'all of these',
};

export const mockedQuestion2: QuestionType = {
	id: 20,
	question: '# can we ask questions?',
	accepting: true,
	option_1: 'yes',
	option_2: 'no',
};

export const mockSolvedQuestion3: QuestionType = {
	id: 30,
	question: 'when does the event start?',
	accepting: true,
	option_1: '1',
	option_2: '2',
	option_3: '3',
	option_4: '4',
};

export const mockUser: UserInfoType = {
	id: 1,
	username: 'mocked_test_user',
	email: 'mockedtestuser1@users.com',
	provider: 'local',
	score: 5,
	created_at: 'during the test',
};

export const mockScoreData: ScoreDataType = {
	id: 5,
	currentPoints: 40,
	quizzes: [{ ...mockSolvedQuestion3 }],
};
