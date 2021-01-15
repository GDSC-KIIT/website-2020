import type { AxiosError } from 'axios';

import type { QuestionType } from '@/types/index';
import apiCall from './apiCall';

export default function fetchSingleQuestion(id: number) {
	return apiCall(id)
		.then((data: QuestionType) => {
			// TODO remove the console.log statement
			console.log(data, 'is the response');
			return data;
		})
		.catch((err: AxiosError) => {
			if (err.response?.status === 401) {
				throw new Error('you are not logged in');
			}
			return null;
		});
}
