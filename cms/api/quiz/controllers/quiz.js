'use strict';

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/concepts/controllers.html#core-controllers)
 * to customize this controller
 */

module.exports = {
	async find(ctx) {
		const filteredQuizzes = await strapi.services.quiz.find({
			accepting: true,
			_sort: 'id:desc',
		});
		return filteredQuizzes;
	},
};
