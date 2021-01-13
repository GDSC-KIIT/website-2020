const fs = require('fs');
const { deleteDB, setupStrapi, userData: mockUserData, userData } = require('./helpers');
const chai = require('chai');
const chaiHTTP = require('chai-http');

const expect = chai.expect;
chai.use(chaiHTTP);

let useridx = 2;
async function addUser(sid) {
	const newUser = await strapi.plugins['users-permissions'].services.user.add({
		...mockUserData,
	});
	return newUser;
}

async function removeUser(sid) {
	const id = sid ? sid : useridx;
	await strapi.plugins['users-permissions'].services.user.remove({ id });
	useridx += 1;
	return true;
}

async function getUser(sid) {
	const id = sid ? sid : useridx;
	const user = await strapi.plugins['users-permissions'].services.user.fetch({
		id,
	});
	return user;
}

describe('score endpoints work', () => {
	let app = null;

	before((done) => {
		setupStrapi().then((instance) => {
			app = instance;
			done();
		});
	});

	after(() => {
		deleteDB();
	});

	// move this test to a seperate file
	context('user methods', () => {
		it('user can be added and removed', () => {
			const fn = async () => {
				const newUser = await strapi.plugins['users-permissions'].services.user.add({
					...mockUserData,
					id: 1,
				});

				expect(newUser).to.exist;
				expect(newUser.id).to.eq(1);

				await strapi.plugins['users-permissions'].services.user.remove({ id: 1 });

				const count = await strapi.plugins['users-permissions'].services.user.count();
				const deletedUser = await strapi.plugins['users-permissions'].services.user.fetch({
					id: 1,
				});

				console.log('no of users', count);
				expect(count).to.eq(0);
				expect(deletedUser).not.to.exist;
			};

			fn().catch((err) => console.log('user test did not complete', err));
		});

		context('user auth endpoints work', () => {
			it('should login user and return jwt token', () => {
				const fn = async () => {
					await addUser();
					const user = await getUser(2);

					console.log('the found user was', user);

					chai.request(app.server)
						.post('/auth/local')
						.send({
							identifier: userData.email,
							password: userData.password,
						})
						.end((error, response) => {
							expect(response).to.have.status(200);
							expect(response.body.jwt).to.exist;
						});

					await removeUser();
				};

				fn().catch((err) => {
					console.log('could not login user', err);
				});
			});
		});
	});

	it('GET the score endpoint', () => {
		chai.request(app.server)
			.get('/scores/')
			.end((error, response) => {
				expect(error).to.be.null;
				expect(response).not.to.have.status(200);
				expect(response).to.not.redirect;
			});
	});

	context('POST the score endpoint', () => {
		// beforeEach((done) => {});

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
