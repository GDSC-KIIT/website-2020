import { ICreateUserData, IUserData, mockUserData } from '../utils';

/**
 * creates a mockUser
 *
 * @param userData will override the values in `mockUserData`
 */
export async function createMockUser(userData?: Partial<IUserData>): Promise<ICreateUserData> {
	const defaultRole = await strapi.query('role', 'users-permissions').findOne({});
	const role = defaultRole ? defaultRole.id : null;
	const addDataParams = userData
		? { ...mockUserData, ...userData, role }
		: { ...mockUserData, role };

	const createdUser: ICreateUserData = await (strapi as any).plugins[
		'users-permissions'
	].services.user.add(addDataParams);

	return createdUser;
}
