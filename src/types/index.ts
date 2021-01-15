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
	option_1: string;
	option_2: string;
	option_3?: string;
	option_4?: string;
	option_5?: string;
	option_6?: string;
};
