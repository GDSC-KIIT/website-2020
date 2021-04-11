import request from 'supertest';

import { setUpServer, tearDownServer } from './lib';

let strapiServer: any;
beforeAll(async () => {
	await setUpServer();
	strapiServer = (strapi as any).server;
}, 15000);

afterAll((done) => {
	tearDownServer();
	done(); // explicitly use done because the above is a callback and not just a inline/linear function like inside it
});

describe('[BANNER]', () => {
	it('should return 200 response on GET endpoints', async () => {
		await request(strapiServer).get('/banners').expect(200);
	});
	it('should return 403 response on POST endpoints', async () => {
		await request(strapiServer).post('/banners').send({}).expect(403);
	});
});

describe('[MEMBERS]', () => {
	it('should return 200 response on GET endpoints', async () => {
		await request(strapiServer).get('/members').expect(200);
	});
	it('should return 403 response on POST endpoints', async () => {
		await request(strapiServer).post('/members').send({}).expect(403);
	});
});

describe('[PROJECTS]', () => {
	it('should return 200 response on GET endpoints', async () => {
		await request(strapiServer).get('/projects').expect(200);
	});
	it('should return 403 response on POST endpoints', async () => {
		await request(strapiServer).post('/projects').send({}).expect(403);
	});
});
