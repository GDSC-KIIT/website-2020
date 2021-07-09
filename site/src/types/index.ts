export type UserInfoType = {
	username: string;
	email: string;
	id: number;
	provider: string;
	created_at: string;
	score: number | null; // a one-to-ome relation with score model which has info about quizzes solved by the user
	badges: Array<Omit<BadgeDataType, 'image'>>;
};

export type QuestionType = {
	id: number;
	qname: string;
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

export type SeasonScoreDataType = {
	id: number;
	limit: number;
	badge: BadgeDataType | null;
};

// each model which is having an image associated will have this type of image
export type DataImageType = {
	id: number;
	url: string;
	width: number;
	height: number;
	hash: string;
	caption: string;
	alternativeText: string;
};

export type BadgeDataType = {
	id: number;
	name: string;
	image: DataImageType;
};

export type BannerDataType = {
	id: number;
	eye_catcher: string;
	title: string;
	image: DataImageType;
	link: string;
};

export type MemberDataType = {
	id: number;
	name: string;
	image: DataImageType;
	domain: string;
	github?: string;
	twitter?: string;
	linkedin?: string;
	facebook?: string;
	website?: string;
};

export type GroupedMemberType = Record<string, Array<MemberDataType>>;

export type ProjectDataType = {
	id: number;
	name: string;
	repository: string;
	members: string;
	description: string;
	logo: DataImageType;
};

export type BlogPostType = {
	author: string;
	categories: string[];
	link: string;
	image: string;
	title: string;
	date: string;
};

export type BlogPostDataType = {
	author: string;
	categories: string[];
	link: string;
	image: string;
	title: string;
	date: Date;
};

export type SearchResultType = {
	item: {
		name: string;
		text: string;
		pageName: string;
		locId: string;
	};
	refIndex: number;
};
