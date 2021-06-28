import axios from 'axios';

import type { SeasonScoreDataType } from '@/types/index';
import { backendUrls } from '@/lib/urls';

export function getSeasonScore(): Promise<number | null> {
	return axios
		.get(backendUrls['season_score'])
		.then((response) => response.data)
		.then((data: SeasonScoreDataType) => data.limit)
		.catch(() => null);
}
