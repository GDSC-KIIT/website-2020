export type UserInfoType = {
	username: string;
	email: string;
	id: number;
	provider: string;
	created_at: string;
};

export type QuestionType = {
	id: number;
	accepting: boolean;
	question: string;
	option1: string;
	option2: string;
	option3?: string;
	option4?: string;
	option5?: string;
	option6?: string;
};
