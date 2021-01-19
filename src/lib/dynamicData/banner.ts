import axios from 'axios';

import { backendUrls } from '@/lib/backendUrls';

export function fetchAllBanners(): Promise<IBanner[]> {
	return axios
		.get(backendUrls['all_banners'])
		.then((response) => response.data)
		.then((data: Array<IBannerData>) => {
			if (Array.isArray(data) === false) {
				return [];
			}
			const banners: IBanner[] = data.map((d) => ({
				id: d.id,
				eye_catcher: d.eye_catcher,
				title: d.title,
				image: d.image?.url,
				link: d.link,
			}));
			return banners;
		})
		.catch((error) => {
			console.log(error, 'during fetching the banners');
			return [];
		});
}
export interface IBanner {
	id: number;
	eye_catcher: string;
	title: string;
	image: string;
	link: string;
}

export interface IBannerData {
	id: number;
	eye_catcher: string;
	title: string;
	link: string;
	image: {
		url: string;
	};
}
