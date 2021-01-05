import { useState, useEffect } from 'react';

import { fetchAllBanners, IBanner } from '@/lib/dynamicData/banner';
import Banner from './banner';

export default function Banners() {
	const [banners, setBanners] = useState<null | Array<IBanner>>(null);

	useEffect(() => {
		fetchAllBanners()
			.then((bns) => setBanners(bns))
			.catch(() => setBanners([]));
	}, []);

	if (Array.isArray(banners) && banners.length > 0) {
		// TODO: Change the banner style
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
