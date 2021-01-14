import { QuestionType } from '@/types/index';
import apiCall from '@/playground/lib/api/apiCall';

export default function fetchAllQuestions() {
	return apiCall('GET')
		.then((data: QuestionType[]) =>
			data.map((q) => ({
				id: q.id,
				accepting: q.accepting,
			}))
		)
		.catch(() => []);
}
