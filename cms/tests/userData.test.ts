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
	it('should return users data for authenticated user', async () => {
		const defaultRole = await strapi.query('role', 'users-permissions').findOne({});

		const role = defaultRole ? defaultRole.id : null;

		const user: IUserData = await strapiUserPlugin.services.user.add({
			...mockUserData,
			username: 'strapiUser2',
			email: 'strapi_user_2@dsc.com',
			role,
		});

		const jwt = strapiUserPlugin.services.jwt.issue({
			id: user.id,
		});

		await request(strapiServer)
			.get('/users/me')
			.set('Authorization', 'Bearer ' + jwt)
			.then((res) => {
				expect(res.status).toEqual(200);
				expect(res.type).toMatch(/json/gi);
				expect(res.body).toBeDefined();
				expect(res.body.id).toBe(user.id);
				expect(res.body.username).toBe(user.username);
				expect(res.body.email).toBe(user.email);
			});
	});
});
