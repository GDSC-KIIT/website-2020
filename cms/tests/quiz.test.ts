import request from 'supertest';

import { getUserCredentials, setUpServer, tearDownServer } from './lib';

let strapiServer: any;
beforeAll(async () => {
	await setUpServer();
	strapiServer = (strapi as any).server;
}, 15000);

afterAll((done) => {
	tearDownServer();
	done();
});

describe('[UNAUTHENTICATED USER]', () => {
	it('cannot get the questions - FORBIDDEN', async () => {
		await request(strapiServer).get('/quizzes').expect(403);
	});
});

describe('[AUTHENTICATED USER]', () => {
	let credentials: Record<string, string>;
	beforeAll(async () => {
		credentials = await getUserCredentials();
	});
	it('can get the questions', async () => {
		const resp = await request(strapiServer)
			.get('/quizzes')
			.set({ ...credentials });
		expect(resp.status).toEqual(200);
		expect(resp.body).toEqual(expect.arrayContaining([]));
	});
});
