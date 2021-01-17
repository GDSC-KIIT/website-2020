'use strict';

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/concepts/controllers.html#core-controllers)
 * to customize this controller
 */

const { sanitizeEntity } = require('strapi-utils');

module.exports = {
	async find(ctx) {
		const sortedQuizzes = await strapi.services.quiz.find({
			_sort: 'id:desc',
		});
		return sortedQuizzes.map(({ id, accepting }) =>
			sanitizeEntity({ id, accepting }, { model: strapi.models.quiz })
		);
	},
	async findOne(ctx) {
		const { id } = ctx.params;
		const entity = await strapi.services.quiz.findOne({ id });
		delete entity.answer; // delete the answer in the return
		return sanitizeEntity(entity, { model: strapi.models.quiz });
	},
};
