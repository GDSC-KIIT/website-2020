import dynamic from 'next/dynamic';
import NextImage from 'next/image';

import Description from './Description';
import About from './About';
import Faq from './Faq';
import Discord from './Discord';

import styles from '@/styles/landing.module.css';

const Banners = dynamic(() => import('@/components/Banner'));
// TODO complete the gallery component or create a new one
//  labels: enhance, to-be-discussed
// const Gallery = dynamic(() => import('@/components/Gallery'));

export default function Landing() {
	// TODO Replace images with next/image for a faster landing
	//  labels: enhance, landing
	return (
		<>
			<div className={styles.background_img}>
				<NextImage src="/images/landing/background.jpg" layout="fill" objectFit="cover" />
			</div>
			<Banners />
			<Description />
			<div>
				<h1 className={`${styles.about}`}>ABOUT DSC</h1>
			</div>
			<About />
			<div>
				<h1 className={`${styles.about}`}>FREQUENTLY ASKED</h1>
			</div>
			<Faq />
			<h1 className={`${styles.about}`}>JOIN US ON DISCORD</h1>
			<Discord />
		</>
	);
}
