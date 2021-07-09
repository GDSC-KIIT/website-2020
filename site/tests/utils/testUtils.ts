import {
	QuestionType,
	ScoreDataType,
	SubmitReponseType,
	UserInfoType,
	BadgeDataType,
	DataImageType,
} from '@/types/index';

const mockImageData: DataImageType = {
	id: 1,
	height: 100,
	width: 100,
	caption: 'caption of mocked',
	alternativeText: 'alt mocked',
	hash: 'abc123mock',
	url: 'cool-badge.jpg',
};

export const createdUser = {
	id: 1,
	username: 'testUser1',
	email: 'test1@test.com',
	password: 'testpass123',
};

export const createdQuestion1 = {
	qname: 'biology',
	question: '*what is biology?*',
	answer: 4,
	accepting: true,
	option_1: 'animal',
	option_2: 'plant',
	option_3: 'micobe',
	option_4: 'all of these',
};

export const createdQuestion2 = {
	qname: 'can we ask',
	question: '# can we ask questions?',
	answer: 2,
	accepting: true,
	option_1: 'yes',
	option_2: 'no',
};

export const createdQuestion3 = {
	qname: 'can we ask',
	question: 'when does the event start?',
	answer: 1,
	accepting: true,
	option_1: '1',
	option_2: '2',
	option_3: '3',
	option_4: '4',
};

export const createdBadge = {
	name: 'gauntlet',
};

// answer is 4
export const mockedQuestion1: QuestionType = {
	id: 10,
	qname: 'biology',
	question: '*what is biology?*',
	accepting: true,
	option_1: 'animal',
	option_2: 'plant',
	option_3: 'micobe',
	option_4: 'all of these',
};

// answer is 2
export const mockedQuestion2: QuestionType = {
	id: 20,
	qname: 'can we ask',
	question: '# can we ask questions?',
	accepting: true,
	option_1: 'yes',
	option_2: 'no',
};

// answer is 1
export const mockSolvedQuestion3: QuestionType = {
	id: 30,
	qname: 'can we ask',
	question: 'when does the event start?',
	accepting: true,
	option_1: '1',
	option_2: '2',
	option_3: '3',
	option_4: '4',
};

export const mockScoreData: ScoreDataType = {
	id: 5,
	currentPoints: 40,
	quizzes: [{ ...mockSolvedQuestion3 }],
};

export const mockBadgeData: BadgeDataType = {
	id: 3,
	name: 'cool badge',
	image: mockImageData,
};

export const mockUser: UserInfoType = {
	id: 1,
	username: 'mocked_test_user',
	email: 'mockedtestuser1@users.com',
	provider: 'local',
	score: 5,
	created_at: 'during the test',
	badges: [mockBadgeData],
};

export const mockSubmitResponse: SubmitReponseType = {
	correct: true,
	message: 'CORRECT ANSWER',
	updated: true,
	created: false,
	points: 50,
	status: 200,
};
