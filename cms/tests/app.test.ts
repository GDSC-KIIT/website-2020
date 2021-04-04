import { setUpStrapi, teardownDatabase } from './helpers/strapi';

// beforeAll and afterAll need to return a Promise or call done for a callback

beforeAll(() => {
	return setUpStrapi(); // returning a promise
}, 15_000);

afterAll((done) => {
	teardownDatabase();
	done(); // explicitly use done because the above is a callback and not just a inline/linear function like inside it
});

describe('[STRAPI]', () => {
	it('strapi is defined', (done) => {
		expect(strapi).toBeDefined();
		done();
	});
});
