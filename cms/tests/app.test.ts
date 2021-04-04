import setUpStrapi from './helpers/strapi';

beforeAll(async (done) => {
	await setUpStrapi();
	done();
});

it('strapi is defined', () => {
	expect(strapi).toBeDefined();
});
