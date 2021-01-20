'use strict';

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/concepts/models.html#lifecycle-hooks)
 * to customize this model
 */

/**
 * contains the information about the authenticated user
 * @typedef user
 * @type {object}
 * @property {number} id
 * @property {string} username
 * @property {string} provider
 * @property {string} email
 * @property {number|null} score
 * @property {badge[]} badges
 */

/**
 * interested fields to update in the score model
 * @typedef score
 * @type {object}
 * @property {number} id
 * @property {Array<object>} quizzes
 * @property {number|null} currentPoints
 * @property {user} users_permissions_user
 */

/**
 * @typedef badge
 * @type {object}
 * @property {number} id
 * @property {string} name
 * @property {object} image
 */

/**
 * @typedef season_score
 * @type {object}
 * @property {number}
 * @property {badge} badge
 * @property {number} limit
 */

/**
 * @param {number} limit
 * @param {badge} badge
 */
async function addBadge(limit, badge) {
	const knex = strapi.connections.default;

	/**getting all users who have currentPoints greater than limit
	 * @type {Array<{userId:number}>} */
	const receivingUsers = await knex('scores')
		.where('currentPoints', '>=', limit)
		.select('users_permissions_user as userId')
		.map(({ userId }) => userId);

	const usersORM = strapi.query('user', 'users-permissions');

	/**@type {user[]} */
	const foundUsers = await usersORM.find({ id_in: receivingUsers });

	const updatedUsers = foundUsers.map((user) => {
		const newBadges = user.badges;
		newBadges.push(badge.id);
		return usersORM.update({ id: user.id }, { badges: newBadges, score: null });
	});

	await Promise.all(updatedUsers);

	// delete all the rows in the score table (cascading all the related users' score)
	await knex('scores').del();
}

module.exports = {
	lifecycles: {
		/**@param {season_score} result  */
		async afterDelete(result) {
			if (!result.limit || !result.badge) {
				return strapi.log.error('either limit or badge were missing');
			}
			await addBadge(result.limit, result.badge);
			strapi.log.info('updated all corresponding scores');
		},
	},
};
