import axios, { AxiosRequestConfig } from 'axios';

import { getSessionAuthToken } from '@/lib/user/session';
import { backendUrls } from '@/lib/urls/backendUrls';

const playgroundUrls: Record<PlaygroundUrlType, string> = {
	scores: backendUrls['scores'],
	quizzes: backendUrls['quizzes'],
};

export default async function apiCall({ url, method, config = {}, particularId = '' }: IApiCall) {
	const authToken = await getSessionAuthToken();

	return axios({
		...config,
		method,
		headers: { Authorization: `Bearer ${authToken}` },
		url: playgroundUrls[url] + '/' + particularId,
	}).then((response) => response.data);
}

type PlaygroundUrlType = 'quizzes' | 'scores';

interface IApiCall {
	url: PlaygroundUrlType;
	method: AxiosRequestConfig['method'];
	config?: AxiosRequestConfig;
	particularId?: string | number;
}
