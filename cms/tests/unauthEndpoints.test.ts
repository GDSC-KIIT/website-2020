import request from 'supertest';

import { setUpServer, tearDownServer } from './lib';

beforeAll(() => {
	return setUpServer();
}, 15000);

afterAll((done) => {
	tearDownServer();
	done(); // explicitly use done because the above is a callback and not just a inline/linear function like inside it
});

describe('[BANNER]', () => {
	it('should return 200 response', async () => {
		await request((strapi as any).server)
			.get('/banners')
			.expect(200);
	});
});

describe('[MEMBERS]', () => {
	it('should return 200 response', async () => {
		await request((strapi as any).server)
			.get('/members')
			.expect(200);
	});
});

describe('[PROJECTS]', () => {
	it('should return 200 response', async () => {
		await request((strapi as any).server)
			.get('/projects')
			.expect(200);
	});
});
