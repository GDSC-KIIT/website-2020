const fs = require('fs');
const { setupStrapi, userData, deleteDB } = require('./helpers');
const chai = require('chai');
const expect = chai.expect;

describe('utils for the test are bootstrapped', () => {
	before((done) => {
		setupStrapi().then(() => {
			done();
		});
	});

	after((done) => {
		deleteDB();
		done();
	});

	it('strapi is defined', () => {
		expect(strapi).to.exist;
	});

	it('a strapi user can be created', (done) => {
		strapi.plugins['users-permissions'].services.user
			.add({
				...userData,
			})
			.then(() => {
				done();
			});
	});
});
