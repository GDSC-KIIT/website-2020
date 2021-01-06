'use strict';

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/concepts/controllers.html#core-controllers)
 * to customize this controller
 */

module.exports = {
	async find() {
		const temp = await strapi.services.badges.find(1);

		console.log('found one', temp);
		return temp;
	},
};
