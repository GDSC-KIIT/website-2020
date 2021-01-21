import axios from 'axios';

import type { BadgeDataType } from '@/types/index';
import { backendUrls } from '@/lib/backendUrls';

export function getAllBadges(): Promise<BadgeDataType[]> {
	return axios
		.get(backendUrls['all_badges'])
		.then((response) => response.data)
		.catch((err) => {
			console.log('could not get any badge', err);
			return [];
		});
}
