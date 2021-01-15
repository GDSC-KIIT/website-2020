import axios, { AxiosRequestConfig, AxiosError } from 'axios';

import { getSessionAuthToken } from '@/lib/user/session';
import type { SubmitReponseType } from '@/types/index';

const baseURL: string = process.env.BACKEND_URL || 'http://localhost:9000';

export default async function submitAnswer(qid: number, ans: number, config?: AxiosRequestConfig) {
	const authToken = await getSessionAuthToken();

	console.info('qid amd ans', qid, ans);

	return axios({
		url: baseURL + '/scores',
		method: 'POST',
		headers: { Authorization: `Bearer ${authToken}` },
		...config,
	})
		.then((response) => response.data)
		.then((data: SubmitReponseType) => data)
		.catch((err: AxiosError) => {
			if (err.response?.headers === 403) {
				throw new Error('you are not logged in!');
			} else if (err.response?.data.message) {
				throw new Error(err.response.data.message);
			}
			console.log(err, 'during submittimg the question');
			throw new Error('an unknown error occurred');
		});
}
