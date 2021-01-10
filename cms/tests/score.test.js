const fs = require('fs');
const { setupStrapi, userData } = require('./helpers');
const chai = require('chai');
const chaiHTTP = require('chai-http');

const expect = chai.expect;
chai.use(chaiHTTP);

describe('score endpoints work', () => {
	let app = null;

	before((done) => {
		setupStrapi()
			.then((instance) => {
				app = instance;
			})
			.then(done);
	});

	// afterEach((done) => {
	// 	const dbSettings = strapi.config.get('database.connections.default.settings');

	// 	if (dbSettings && dbSettings.filename) {
	// 		const tmpDbFile = `${__dirname}/../${dbSettings.filename}`;
	// 		if (fs.existsSync(tmpDbFile)) {
	// 			fs.rmSync(tmpDbFile);
	// 		}
	// 	}

	// 	done();
	// });

	it('GET the score endpoint', (done) => {
		chai.request(app.server)
			.get('/scores/')
			.end((error, response) => {
				expect(error).to.be.null;
				expect(response).not.to.have.status(200);
				expect(response).to.not.redirect;
				done();
			});
	});

	context('POST the score endpoint', () => {
		beforeEach(async () => {
			await strapi.plugins['users-permissions'].services.user.add({
				...userData,
			});
		});

		it('blank request does not give 2xx status code', (done) => {
			chai.request(app.server)
				.post('/scores/')
				.end((err, res) => {
					expect(res).not.to.have.status(200);
					// expect(res.message).to.exist;
					done();
				});
		});
	});
});
