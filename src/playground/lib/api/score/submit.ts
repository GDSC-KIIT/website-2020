import axios, { AxiosRequestConfig, AxiosError } from 'axios';

import { getSessionAuthToken } from '@/lib/user/session';
import type { SubmitReponseType } from '@/types/index';

const baseURL: string = process.env.BACKEND_URL || 'http://localhost:9000';

export default async function submitAnswer(qid: number, ans: number, config?: AxiosRequestConfig) {
	const authToken = await getSessionAuthToken();

	return axios({
		url: baseURL + '/scores',
		method: 'POST',
		headers: { Authorization: `Bearer ${authToken}` },
		data: { qid, ans },
		...config,
	})
		.then((response) => response.data)
		.then((data: SubmitReponseType) => data)
		.catch((err: AxiosError) => {
			if (err.response?.status === 403) {
				throw new Error('you are not logged in!');
			} else if (err.response && err.response.data && 'message' in err.response.data) {
				throw new Error(err.response.data.message);
			}
			console.log('There was an error with your response', err);
			throw new Error('an unknown error occurred');
		});
}
