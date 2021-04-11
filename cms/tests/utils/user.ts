export const mockUserData = {
	username: 'mocked-user',
	email: 'mock_user@dsc.com',
	provider: 'local',
	password: 'mock_password',
	confirmed: true,
	blocked: null,
};

export interface IUserData {
	id: number;
	username: string;
	password: string;
	email: string;
	provider: string;
	created_at: Date;
	updated_at: Date;
	badges: Array<any>;
	score: null | number;
}
