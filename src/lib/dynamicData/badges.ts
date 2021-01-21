import axios from 'axios';

import type { BadgeDataType, DataImageType } from '@/types/index';
import { backendUrls } from '@/lib/backendUrls';

export function getAllBadges(): Promise<BadgeDataType[]> {
	return axios
		.get(backendUrls['all_badges'])
		.then((response) => response.data)
		.then((data: Array<BadgeDataType & DataImageType>) => {
			console.log('the data was ', data);
			return data.map((badge) => ({ ...badge, image: badge.image.url }));
		})
		.catch((err) => {
			console.log('could not get any badge', err);
			return [];
		});
}
