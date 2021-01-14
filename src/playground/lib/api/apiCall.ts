import axios, { AxiosRequestConfig } from 'axios';

import { getSessionAuthToken } from '@/lib/user/session';

const baseURL: string = process.env.BACKEND_URL || 'http://localhost:9000';

const axiosInstance = axios.create({
	baseURL,
});

const quizUrl = '/quizzes';

export default async function apiCall(
	method: methodType,
	config?: AxiosRequestConfig,
	id?: number,
	data?: any
) {
	const url = id ? `${quizUrl}/${id}` : quizUrl;

	const authToken = await getSessionAuthToken();

	return axiosInstance({
		...config,
		// headers: { Authorization: `Bearer ${authToken}` },
		method,
		url,
		data,
	})
		.then((response) => response.data)
		.catch((error) => {
			console.log('error with api call in quiz', error);
			return null;
		});
}

type methodType = 'GET' | 'POST';
