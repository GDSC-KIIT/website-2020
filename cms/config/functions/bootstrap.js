'use strict';

/**
 * An asynchronous bootstrap function that runs before
 * your application gets started.
 *
 * This gives you an opportunity to set up your data model,
 * run jobs, or perform some special logic.
 *
 * See more details here: https://strapi.io/documentation/developer-docs/latest/concepts/configurations.html#bootstrap
 */

require('dotenv').config({ path: require('find-config')('.env') });

async function updatePermissionsTestConfig() {
	const orm = strapi.query('permission', 'users-permissions');
	const perms = await orm.find({ type: 'application' });

	for (const perm of perms) {
		const isReadEndpoint = ['find', 'findone', 'count'].includes(perm.action);
		const restrictedToPublic = ['quiz', 'score'].includes(perm.controller);
		const isAuthRole = perm.role.type === 'authenticated';

		// authenticated permission
		if (isReadEndpoint && isAuthRole) {
			strapi.log.info(`Allowing authenticated to call ${perm.controller}.${perm.action}`);
			orm.update({ id: perm.id }, { ...perm, enabled: true });
		}

		// public permissions
		// in testing all CRUD operation are allowed
		else if (!restrictedToPublic && !isAuthRole) {
			strapi.log.info(`Allowing public to call ${perm.controller}.${perm.action}`);
			orm.update({ id: perm.id }, { ...perm, enabled: true });
		}
		// handle creating of scores for authenticated users
		else if (perm.controller === 'score' && perm.action === 'create' && isAuthRole) {
			strapi.log.info('Allowing authenticated to create scores');
			orm.update({ id: perm.id }, { ...perm, enabled: true });
		}
		// public user can CUD operation on score and quiz
		else if (!isAuthRole && restrictedToPublic && !isReadEndpoint) {
			strapi.log.info(`Allowing public to call ${perm.controller}.${perm.action}`);
			orm.update({ id: perm.id }, { ...perm, enabled: true });
		}
	}

	const userPerms = await orm.find({ type: 'users-permissions' });

	for (const userPerm of userPerms) {
		if (userPerm.controller === 'user' && userPerm.role.type === 'public') {
			orm.update({ id: userPerm.id }, { ...userPerm, enabled: true });

			strapi.log.info(
				`USER-PERMISSIONS Allowing public to call ${userPerm.controller}.${userPerm.action}`
			);
		}
	}
}

async function updatePermissions() {
	const orm = strapi.query('permission', 'users-permissions');
	const perms = await orm.find({ type: 'application' });

	for (const perm of perms) {
		const isReadEndpoint = ['find', 'findone', 'count'].includes(perm.action);
		const restrictedToPublic = ['quiz', 'score'].includes(perm.controller);
		const isAuthRole = perm.role.type === 'authenticated';

		// authenticated permission
		if (isReadEndpoint && isAuthRole) {
			strapi.log.info(`Allowing authenticated to call ${perm.controller}.${perm.action}`);
			orm.update({ id: perm.id }, { ...perm, enabled: true });
		}

		// public permissions
		else if (isReadEndpoint && !restrictedToPublic) {
			strapi.log.info(`Allowing public to call ${perm.controller}.${perm.action}`);
			orm.update({ id: perm.id }, { ...perm, enabled: true });
		}
		// handle creating of scores for authenticated users
		else if (perm.controller === 'score' && perm.action === 'create' && isAuthRole) {
			strapi.log.info('Allowing authenticated to create scores');
			orm.update({ id: perm.id }, { ...perm, enabled: true });
		}
	}
}

module.exports = async () => {
	if (process.env.TESTING === 'TRUE') {
		await updatePermissionsTestConfig();
	} else {
		await updatePermissions();
	}
};
