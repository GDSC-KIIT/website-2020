import request from 'supertest';

import { setUpStrapi, teardownDatabase } from './helpers/strapi';

beforeAll(() => {
	return setUpStrapi();
}, 15000);

afterAll((done) => {
	teardownDatabase();
	done(); // explicitly use done because the above is a callback and not just a inline/linear function like inside it
});

describe('[BANNER]', () => {
	it('should return 200 response', async () => {
		await request((strapi as any).server)
			.get('/banners')
			.expect(200);
	});
});
