import apiCall from '../apiCall';
import type { SubmitReponseType } from '@/types/index';

export default async function submitAnswer(qid: number, ans: number) {
	return apiCall({
		url: 'scores',
		method: 'POST',
		config: { data: { qid, ans } },
		throwError: true,
	}).then((data: SubmitReponseType) => data);
}
