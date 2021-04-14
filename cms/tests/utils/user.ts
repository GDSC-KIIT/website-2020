/**
 * *role* key is null
 *
 * _can be changed to the default role during creating a new user_ */
export const mockUserData = {
	username: 'mocked-user',
	email: 'mock_user@dsc.com',
	provider: 'local',
	password: 'mock_password',
	confirmed: true,
	blocked: null,
	role: null,
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

export interface ICreateUserData {
	id: number;
	username: string;
	email: string;
	provider: string;
	password: string;
	resetPasswordToken: unknown | null;
	confirmationToken: unknown | null;
	confirmed: boolean;
	blocked: unknown | null;
	role: null;
	score: number | null;
	created_by: unknown | null;
	updated_by: unknown | null;
	created_at: Date;
	updated_at: Date;
	badges: Array<any>;
}
