import type { QuestionType } from '@/types/index';
import apiCall from '../apiCall';

export default function fetchAllQuestions() {
	return apiCall({ url: 'quizzes', method: 'GET' })
		.then((data: QuestionType[]) => data)
		.catch(() => []);
}
