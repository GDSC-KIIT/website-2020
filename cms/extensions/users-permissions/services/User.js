'use strict';

const fieldsToPopulate = ['role', 'badges']; // fields which are one-to-many from the user without a foreign key on the other model can be populated by explicitly mentioning the modelname

module.exports = {
	/**
	 * Promise to fetch authenticated user.
	 * @return {Promise}
	 */
	fetchAuthenticatedUser(id) {
		return strapi.query('user', 'users-permissions').findOne({ id }, fieldsToPopulate);
	},
};
