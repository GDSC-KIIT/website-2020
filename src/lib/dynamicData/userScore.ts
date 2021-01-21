import axios from 'axios';

import type { ScoreDataType } from '@/types/index';
import { backendUrls } from '@/lib/backendUrls';

export function getUserScore(scoreId: number): Promise<ScoreDataType | null> {
	return axios
		.get(backendUrls['user_score'] + scoreId)
		.then((response) => response.data)
		.catch((err) => {
			console.log('could not get the user score', err);
			return null;
		});
}
