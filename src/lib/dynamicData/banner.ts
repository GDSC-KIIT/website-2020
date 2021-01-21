import axios from 'axios';

import type { BannerType, DataImageType } from '@/types/index';
import { backendUrls } from '@/lib/backendUrls';

export function fetchAllBanners(): Promise<BannerType[]> {
	return axios
		.get(backendUrls['all_banners'])
		.then((response) => response.data)
		.then((data: Array<BannerType & DataImageType>) => {
			if (Array.isArray(data) === false) {
				return [];
			}
			const banners: BannerType[] = data.map((d) => ({
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
