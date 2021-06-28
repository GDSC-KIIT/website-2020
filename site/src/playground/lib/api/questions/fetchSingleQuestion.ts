import type { QuestionType } from '@/types/index';
import apiCall from '../apiCall';

export default function fetchSingleQuestion(id: number) {
	return apiCall({ url: 'quizzes', particularId: id, method: 'GET' })
		.then((data: QuestionType) => data)
		.catch(() => null);
}
