import axios, { AxiosRequestConfig, AxiosError } from 'axios';

import { getSessionAuthToken } from '@/lib/user/session';
import { backendUrls } from '@/lib/urls/backendUrls';

const playgroundUrls: Record<PlaygroundUrlType, string> = {
	scores: backendUrls['scores'],
	quizzes: backendUrls['quizzes'],
};

export default async function apiCall({
	url,
	method,
	config = {},
	particularId = '',
	throwError = false,
}: IApiCall) {
	const authToken = await getSessionAuthToken();

	return axios({
		...config,
		method,
		headers: { Authorization: `Bearer ${authToken}` },
		url: playgroundUrls[url] + '/' + particularId,
	})
		.then((response) => response.data)
		.catch((err: AxiosError) => {
			if (err.response?.status === 403) {
				throw new Error('you are not logged in!');
			} else if (err.response?.status && err.response?.status >= 500) {
				throw new Error('Something was gone wrong with the server. Please report this!');
			} else if (err.response?.data && 'message' in err.response.data) {
				throw new Error(err?.response.data.message);
			}
			console.log('There was an error with your response', err);
			if (throwError) {
				throw new Error('An unknown error occured. Please check the console.');
			}
		});
}

type PlaygroundUrlType = 'quizzes' | 'scores';

interface IApiCall {
	url: PlaygroundUrlType;
	method: AxiosRequestConfig['method'];
	throwError?: boolean;
	config?: AxiosRequestConfig;
	particularId?: string | number;
}
