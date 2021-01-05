import axios from 'axios';

import type { EventType } from '@/types/index';
import { backendUrls } from '@/lib/backendUrls';

interface IBannerData {
	event: EventType & { media: { url: string } };
	id: number;
	eye_catcher: string;
}

export interface IBanner {
	id: number;
	eye_catcher: string;
	title: string;
	image: string;
	link: string;
}

export function fetchAllBanners(): Promise<Array<IBanner>> {
	return axios
		.get(backendUrls['all_banners'])
		.then((response) => response.data)
		.then((data: Array<IBannerData>) => {
			if (Array.isArray(data) === false) {
				return [];
			}
			const banners: Array<IBanner> = data.map((d) => ({
				id: d.id,
				eye_catcher: d.eye_catcher,
				title: d.event.name,
				image: 'http://localhost:9000' + d.event.media.url,
				link: d.event.links,
			}));
			return banners;
		})
		.catch((error) => {
			console.log(error, 'during fetching the banners');
			return [];
		});
}
