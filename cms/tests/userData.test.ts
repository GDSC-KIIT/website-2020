import request from 'supertest';
import { mockUserData, IUserData } from './utils';

import { setUpServer, tearDownServer } from './lib';

let strapiServer: any;
let strapiUserPlugin: any;
beforeAll(async () => {
	await setUpServer();
	strapiServer = (strapi as any).server;
	strapiUserPlugin = (strapi as any).plugins['users-permissions'];
}, 15000);

afterAll((done) => {
	tearDownServer();
	done();
});

describe('[REGISTER USER]', () => {
	beforeAll(async () => {
		await strapiUserPlugin.services.user.add({
			...mockUserData,
		});
	});
	it('should login user and return jwt token', async () => {
		await request(strapiServer)
			.post('/auth/local')
			.send({
				identifier: mockUserData.email,
				password: mockUserData.password,
			})
			.expect(200)
			.then((res) => {
				expect(res.type).toMatch(/json/gi);
				expect(res.body.jwt).toBeDefined();
			});
	});
	it('should not create the same user', async () => {
		let canCreate: boolean = false;
		try {
			await strapiUserPlugin.services.user.add({
				...mockUserData,
			});
			canCreate = true;
		} catch (e) {
			expect(e).toBeDefined();
		}
		expect(canCreate).toBeFalsy();
	});
});

describe('[USER DATA]', () => {
	let defaultRole: Record<string, unknown>;
	let role: any;
	let user2: IUserData;
	let jwt: string;

	beforeAll(async () => {
		defaultRole = await strapi.query('role', 'users-permissions').findOne({});

		role = defaultRole ? defaultRole.id : null;

		user2 = await strapiUserPlugin.services.user.add({
			...mockUserData,
			username: 'strapiUser2',
			email: 'strapi_user_2@dsc.com',
			role,
		});

		jwt = strapiUserPlugin.services.jwt.issue({
			id: user2.id,
		});
	});

	/**
	 * this data is required for the use user endpoint
	 */
	it('contains the required data for the frontend', async () => {
		await request(strapiServer)
			.get('/users/me')
			.set('Authorization', 'Bearer ' + jwt)
			.then((res) => {
				const user2ResponseData = res.body;
				expect(user2ResponseData).toHaveProperty('username');
				expect(user2ResponseData).toHaveProperty('email');
				expect(user2ResponseData).toHaveProperty('id');
				expect(user2ResponseData).toHaveProperty('provider');
				expect(user2ResponseData).toHaveProperty('created_at');
				expect(user2ResponseData).toHaveProperty('score');
				expect(user2ResponseData).toHaveProperty('badges');
			});
	});

	it('matches the snapshot', async () => {
		await request(strapiServer)
			.get('/users/me')
			.set('Authorization', 'Bearer ' + jwt)
			.then((res) => {
				const user2ResponseData = res.body;
				delete user2ResponseData['created_at'];
				delete user2ResponseData['updated_at'];
				expect(user2ResponseData).toMatchSnapshot('user_2_response_data');
			});
	});

	it('should return users data for authenticated user', async () => {
		await request(strapiServer)
			.get('/users/me')
			.set('Authorization', 'Bearer ' + jwt)
			.then((res) => {
				expect(res.status).toEqual(200);
				expect(res.type).toMatch(/json/gi);
				expect(res.body).toBeDefined();
				expect(res.body.id).toBe(user2.id);
				expect(res.body.username).toBe(user2.username);
				expect(res.body.email).toBe(user2.email);
			});
	});
});
