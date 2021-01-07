'use strict';

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/concepts/controllers.html#core-controllers)
 * to customize this controller
 */

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
	async find(ctx) {
		/**
		 * @type {user}
		 */
		const user = ctx.state.user;

		if (!user) {
			ctx.send('no user found');
		}

		if (user.score) {
			// update the user's score
			const foundScoresArray = await strapi.services.score.find({ id: user.score });

			/**
			 * @type {score}
			 */
			const foundScore = foundScoresArray[0];
			// const newScore = await strapi.sever

			const upd = await strapi.services.score.update(
				{ id: foundScore.id },
				{ points: foundScore.points + INCREMENT }
			);
			console.log('tweaked changes', upd);
		} else {
			// create a new score for the user
			console.log('no one foudn');
			ctx.send('create a new score for the user');
		}

		ctx.send('done');
	},
};
