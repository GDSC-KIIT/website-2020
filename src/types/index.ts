export type UserInfoType = {
	username: string;
	email: string;
	id: number;
	provider: string;
	created_at: string;
	score: number | null; // a one-to-ome relation with score model which has info about quizzes solved by the user
};

export type QuestionType = {
	id: number;
	accepting: boolean;
	question: string;
	option_1: string;
	option_2: string;
	option_3?: string;
	option_4?: string;
	option_5?: string;
	option_6?: string;
};

export type SubmitReponseType = {
	points: number;
	updated: boolean;
	created: boolean;
	status: number;
	message: string;
	correct: boolean;
};

export type ScoreDataType = {
	id: number;
	currentPoints: number;
	quizzes: QuestionType[];
};
