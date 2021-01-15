import axios, { AxiosRequestConfig, AxiosError } from 'axios';

import { getSessionAuthToken } from '@/lib/user/session';
import type { SubmitReponseType } from '@/types/index';

const baseURL: string = process.env.BACKEND_URL || 'http://localhost:9000';

const axiosInstance = axios.create({
	baseURL,
	method: 'POST',
});

export default async function submitAnswer(qid: number, ans: number, config?: AxiosRequestConfig) {
	const authToken = await getSessionAuthToken();

	return axiosInstance({
		...config,
		headers: { Authorization: `Bearer ${authToken}` },
		url: '/scores',
		data: {
			qid,
			ans,
		},
	})
		.then((response) => response.data)
		.then((data: SubmitReponseType) => data)
		.catch((err: AxiosError) => {
			if (err.response?.headers === 403) {
				throw new Error('you are not logged in!');
			} else if (err.response?.data.message) {
				throw new Error(err.response.data.message);
			}
			throw new Error('an unknown error occurred');
		});
}
