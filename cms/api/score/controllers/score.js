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

module.exports = {
	async create(ctx) {
		/**
		 * @type {user}
		 */
		const user = ctx.state.user;

		const response = {
			points: 0,
			updated: false,
			created: false,
			status: 200,
			message: '',
		};

		if (!user) {
			response.status = 400;
			response.message = 'user not logged in';
		}

		if (user.score) {
			// update the user's score

			const foundScoresArray = await strapi.services.score.find({ id: user.score });

			/**@type {score} */
			const foundScore = foundScoresArray[0];
			// const newScore = await strapi.sever

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
