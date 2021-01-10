const fs = require('fs');
const { setupStrapi } = require('./helpers/strapi');
const chai = require('chai');
const expect = chai.expect;

describe('utils for the test are bootstrapped', () => {
	before((done) => {
		setupStrapi().then(() => {
			done();
		});
	});

	after(async (done) => {
		const dbSettings = strapi.config.get('database.connections.default.settings');

		if (dbSettings && dbSettings.filename) {
			const tmpDbFile = `${__dirname}/../${dbSettings.filename}`;
			if (fs.existsSync(tmpDbFile)) {
				fs.unlinkSync(tmpDbFile);
			}
		}
		done();
	});

	it('strapi is defined', (done) => {
		expect(strapi).to.exist;
		done();
	});

	it('2 should be 2', (done) => {
		expect(5).not.to.equal(2);
		done();
	});
});
