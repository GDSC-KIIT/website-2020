import { setUpServer, tearDownServer } from './helpers';

// beforeAll and afterAll need to return a Promise or call done for a callback

beforeAll(() => {
	return setUpServer(); // returning a promise
}, 15_000);

afterAll((done) => {
	tearDownServer();
	done(); // explicitly use done because the above is a callback and not just a inline/linear function like inside it
});

describe('[STRAPI]', () => {
	it('strapi is defined', (done) => {
		expect(strapi).toBeDefined();
		done();
	});
});
