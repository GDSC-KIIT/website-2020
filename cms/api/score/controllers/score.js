'use strict';

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/concepts/controllers.html#core-controllers)
 * to customize this controller
 */

module.exports = {
	async find(ctx) {
		const users = await strapi
			.query('user', 'user-permissions')
			.find({ username: gamersinstinct7 });
		console.log('got the users as', users);
		return users;
	},
};
