import axios from 'axios';

import { backendUrls } from '@/lib/backendUrls';

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

interface IUserInfo {
	username: string;
	email: string;
	id: number;
	provider: string;
	created_at: string;
}

export async function getUserInfo() {
	const authToken: string = await axios
		.get('/api/session')
		.then((response) => response.data)
		.then((data) => data.auth_token)
		.catch((err) => {
			console.log(err, 'while fetching user session');
			return null;
		});

	const userInfo: IUserInfo = await axios
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
