'use strict';

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/concepts/controllers.html#core-controllers)
 * to customize this controller
 */

module.exports = {
	async find() {
		// both are async
		const b = await strapi.query('season-score').find();
		const a = strapi.services['season-score'].find();

		const seasonScore = {
			limit: b[0].limit,
			id: b[0].id,
		};
		return seasonScore;
	},
};
