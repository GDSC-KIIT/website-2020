import type { UserInfoType } from '@/types/index';

import axios from 'axios';

import { backendUrls } from '@/lib/urls';
import { getSessionAuthToken } from '@/lib/user/session';

export async function getUserInfo(): Promise<UserInfoType> {
	const authToken = await getSessionAuthToken();

	return axios
		.get(backendUrls['user_info'], {
			headers: {
				Authorization: `Bearer ${authToken}`,
			},
		})
		.then((response) => response.data)
		.catch((err) => {
			console.log(err, 'while fetching user info');
			return null;
		});
}
