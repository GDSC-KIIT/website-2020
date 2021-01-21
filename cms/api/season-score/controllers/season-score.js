'use strict';

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/concepts/controllers.html#core-controllers)
 * to customize this controller
 */

module.exports = {
	async find(ctx) {
		const b = await strapi.query('season-score').find();

		if (!b || !b[0] || !b[0].published_at) {
			ctx.status = 404;
			ctx.body = { error: 'season score has not been revealed' };
			return;
		}

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
