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

async function updatePermissionTestConfig() {
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
		else if (!restrictedToPublic) {
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
		await updatePermissionTestConfig();
	} else {
		await updatePermissions();
	}
};
