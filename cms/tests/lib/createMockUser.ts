import { ICreateUserData, IUserData, mockUserData } from '../utils';

/**
 * creates a mockUser
 *
 * @param userData will override the values in `mockUserData`
 */
export async function createMockUser(userData?: Partial<IUserData>): Promise<ICreateUserData> {
	const addDataParams = userData ? { ...mockUserData, ...userData } : { ...mockUserData };

	const createdUser: ICreateUserData = await (strapi as any).plugins[
		'users-permissions'
	].services.user.add(addDataParams);

	return createdUser;
}
