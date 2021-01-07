'use strict';

/**
 * contains the information about the authenticated user
 * @typedef user
 * @type {object}
 * @property {number} id
 * @property {string} username
 * @property {string} provider google should be the selected auth provider
 * @property {string} email
 * @property {number|null} score
 */

/**
 * interested fields to update in the score model
 * @typedef score
 * @type {object}
 * @property {number} id
 * @property {number} points
 */

const INCREMENT = 10;

function checkRequest(ctx, response) {
	response.status = 400;

	if (!ctx.state || !ctx.state.user) {
		response.message = 'user not logged in';
		return false;
	}

	if (!ctx.request.body || !ctx.request.body.qid) {
		response.message = 'did not find the question!';
		return false;
	}

	return true;
}

module.exports = {
	async create(ctx) {
		/**
		 * @type {user}
		 */

		const response = {
			points: 0,
			updated: false,
			created: false,
			status: 200,
			message: '',
		};

		if (checkRequest(ctx, response) === false) {
			ctx.status = response.status;
			ctx.body = response;
			return;
		}

		const user = ctx.state.user;

		if (user.score) {
			// update the user's score

			/**@type {score} */
			const foundScore = await strapi.query('score').findOne({ id: user.score });

			/**@type {score} */
			const updatedScore = await strapi.services.score.update(
				{ id: foundScore.id },
				{ points: foundScore.points + INCREMENT }
			);

			response.updated = true;
			response.points = updatedScore.points;
			response.message = 'correct answer!';
			response.status = 202;
		} else {
			// create a new score for the user

			/**@type {score} */
			const newScore = await strapi.services.score.create({
				users_permissions_user: user.id,
				points: INCREMENT,
			});

			response.created = true;
			response.points = newScore.points;
			response.message = 'correct answer!';
			response.status = 201;
		}

		ctx.status = response.status;
		ctx.body = response;
	},
};
