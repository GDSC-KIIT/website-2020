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
