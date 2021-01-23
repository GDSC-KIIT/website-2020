import axios from 'axios';

import type { BadgeDataType, DataImageType } from '@/types/index';
import { backendUrls } from '@/lib/backendUrls';

export function getAllBadges(): Promise<BadgeDataType[]> {
	return axios
		.get(backendUrls['badges'])
		.then((response) => response.data)
		.then((data: Array<BadgeAndImageDataType>) =>
			data.map((badge) => ({ ...badge, image: badge.image.url }))
		)
		.catch((err) => {
			console.log('could not get any badge', err);
			return [];
		});
}

export function getSingleBadge(id: number): Promise<BadgeDataType | null> {
	return axios
		.get(backendUrls['badges'] + '/' + id)
		.then((response) => response.data)
		.then((data: BadgeAndImageDataType) => ({ ...data, image: data.image.url }))
		.catch((err) => {
			console.log('could not get that badge', err);
			return null;
		});
}

export async function getUserBadgesFromArray(
	BadgesArray: Array<Omit<BadgeDataType, 'image'>>
): Promise<Array<BadgeDataType>> {
	const reqs = BadgesArray.map((badgeItem) => getSingleBadge(badgeItem.id));
	const resps = await Promise.all(reqs);

	return resps.filter((resp): resp is BadgeDataType => resp !== null);
}

type BadgeAndImageDataType = BadgeDataType & DataImageType;
