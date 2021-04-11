import request from 'supertest';
import { mockUserData } from './utils';

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

it('should login user and return jwt token', async (done) => {
	/** Creates a new user and save it to the database */
	await strapiUserPlugin.services.user.add({
		...mockUserData,
	});

	await request(strapiServer) // app server is an instance of Class: http.Server
		.post('/auth/local')
		.set('accept', 'application/json')
		.set('Content-Type', 'application/json')
		.send({
			identifier: mockUserData.email,
			password: mockUserData.password,
		})
		.expect('Content-Type', /json/)
		.expect(200)
		.then((data) => {
			expect(data.body.jwt).toBeDefined();
		});

	done();
});

it('should return users data for authenticated user', async (done) => {
	/** Gets the default user role */
	const defaultRole = await strapi.query('role', 'users-permissions').findOne({});

	const role = defaultRole ? defaultRole.id : null;

	/** Creates a new user an push to database */
	const user = await strapiUserPlugin.services.user.add({
		...mockUserData,
		username: 'strapiUser2',
		email: 'strapi_user_2@dsc.com',
		role,
	});

	const jwt = strapiUserPlugin.services.jwt.issue({
		id: user.id,
	});

	await request(strapiServer) // app server is an instance of Class: http.Server
		.get('/users/me')
		.set('accept', 'application/json')
		.set('Content-Type', 'application/json')
		.set('Authorization', 'Bearer ' + jwt)
		.expect('Content-Type', /json/)
		.expect(200)
		.then((data) => {
			expect(data.body).toBeDefined();
			expect(data.body.id).toBe(user.id);
			expect(data.body.username).toBe(user.username);
			expect(data.body.email).toBe(user.email);
		});

	done();
});
