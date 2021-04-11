import { mockUserData } from '../utils';
import { createMockUser } from './createMockUser';

/**
 * get the credentials of `mockUserData` by fetching the jwt token
 * call this function while doing `.set()`
 * _`strapi` should be defined in the script_
 */
export async function getUserCredentials() {
	const foundUser = await strapi
		.query('user', 'users-permissions')
		.findOne({ username: mockUserData.username });

	let jwt: string;
	if (foundUser) {
		jwt = (strapi as any).plugins['users-permissions'].services.jwt.issue({ id: foundUser.id });
	} else {
		const createdUser = await createMockUser({ ...mockUserData });
		jwt = (strapi as any).plugins['users-permissions'].services.jwt.issue({
			id: createdUser.id,
		});
	}

	return { Authorization: 'Bearer ' + jwt };
}
