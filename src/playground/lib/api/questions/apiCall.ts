import axios, { AxiosRequestConfig } from 'axios';

import { getSessionAuthToken } from '@/lib/user/session';

const baseURL: string = process.env.BACKEND_URL || 'http://localhost:9000';

const axiosInstance = axios.create({
	baseURL,
});

const quizUrl = '/quizzes';

export default async function apiCall(id?: number, config?: AxiosRequestConfig) {
	const url = id ? `${quizUrl}/${id}` : quizUrl;

	const authToken = await getSessionAuthToken();

	return axiosInstance({
		...config,
		headers: { Authorization: `Bearer ${authToken}` },
		url,
	}).then((response) => response.data);
}
