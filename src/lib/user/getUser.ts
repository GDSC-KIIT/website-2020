import axios from 'axios';

import type { UserInfoType } from '@/types/index';
import { backendUrls } from '@/lib/backendUrls';

function _getSessionAuthToken() {
	return axios
		.get('/api/session')
		.then((response) => response.data)
		.then((data) => data.auth_token)
		.catch((err) => {
			console.log(err, 'while fetching user session');
			return null;
		});
}

interface IData {
	jwt: string;
	user: {
		username: string;
		email: string;
		provider: 'google' | string;
	};
}

export function getUserToken(access_token: string | string[] | undefined) {
	return axios
		.get(backendUrls['auth_callback'] + access_token)
		.then((response) => response.data)
		.then((data: IData) => data.jwt)
		.catch((err) => {
			console.log(err, 'while fetching user token');
			return null;
		});
}

export async function getUserInfo() {
	const authToken: string = await _getSessionAuthToken();

	const userInfo: UserInfoType = await axios
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

	return userInfo;
}
