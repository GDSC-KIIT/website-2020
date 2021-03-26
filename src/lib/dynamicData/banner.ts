import axios from 'axios';

import type { BannerDataType } from '@/types/index';
import { backendUrls } from '@/lib/backendUrls';

export function fetchAllBanners(): Promise<BannerDataType[]> {
	return axios
		.get(backendUrls['all_banners'])
		.then((response) => response.data)
		.then((data: Array<BannerDataType>) => {
			if (!Array.isArray(data)) {
				return [];
			}
			return data;
		})
		.catch((error) => {
			console.log(error, 'during fetching the banners');
			return [];
		});
}
