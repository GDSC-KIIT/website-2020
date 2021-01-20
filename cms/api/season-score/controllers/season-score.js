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

		console.log(b[0].badge);

		const seasonScore = {
			limit: b[0].limit,
			id: b[0].id,
			badge: b[0].badge && {
				id: b[0].badge.id,
				name: b[0].badge.name,
				image: b[0].badge.image,
			},
		};
		return seasonScore;
	},
};
