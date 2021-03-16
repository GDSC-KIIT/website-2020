import useSWR from 'swr';

import type { BannerDataType } from '@/types/index';
import { fetchAllBanners } from '@/lib/dynamicData/banner';
import Banner from './banner';

export default function Banners() {
	const { data } = useSWR('all_banners', fetchAllBanners, { refreshInterval: 60 * 1000 });

	let banners: BannerDataType[] = data ?? [];

	if (banners.length > 0) {
		return (
			<>
				<span style={{ marginTop: '2rem' }} />
				{banners.map((banner) => (
					<Banner
						key={banner.id}
						title={banner.title}
						image={banner.image}
						eye_catcher={banner.eye_catcher}
						link={banner.link}
					/>
				))}
			</>
		);
	}
	return null;
}
