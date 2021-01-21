import axios from 'axios';

import { getSessionAuthToken } from '@/lib/user/session';
import { ScoreDataType } from '@/types/index';

const baseURL: string = process.env.BACKEND_URL || 'http://localhost:9000';

const axiosInstance = axios.create({
	baseURL: baseURL + '/scores',
	method: 'GET',
});

export default async function checkSubmission(currentQid: number, scoreId: number) {
	const authToken = await getSessionAuthToken();

	return axiosInstance({
		url: `/${scoreId}`,
		headers: { Authorization: `Bearer ${authToken}` },
	})
		.then((response) => response.data)
		.then((data: ScoreDataType) => {
			if (data.quizzes.some((quiz) => quiz.id === currentQid)) {
				return true;
			}
			return false;
		})
		.catch((err) => console.log('could not find the score of the user', err));
}
