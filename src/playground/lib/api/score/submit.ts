import type { AxiosError } from 'axios';

import apiCall from '../apiCall';
import type { SubmitReponseType } from '@/types/index';

export default async function submitAnswer(qid: number, ans: number) {
	return apiCall({ url: 'scores', method: 'POST', config: { data: { qid, ans } } })
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
