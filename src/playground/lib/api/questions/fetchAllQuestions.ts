import type { AxiosError } from 'axios';

import type { QuestionType } from '@/types/index';
import apiCall from './apiCall';

export default function fetchAllQuestions() {
	return apiCall()
		.then((data: QuestionType[]) => {
			return data.map((q) => ({
				id: q.id,
				accepting: q.accepting,
			}));
		})
		.catch((err: AxiosError) => {
			if (err.response?.status === 401) {
				throw new Error('you are not logged in');
			}
			return [];
		});
}
