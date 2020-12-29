import Mentors from '@/components/member-template/mentors';
import ReadyToTalk from '@/components/ReadyToTalk/ReadyToTalk';
import MentorIntro from '@/components/Intro/Mentor-intro';
import Layout from '@/components/Layout';
import Head from 'next/head';
import styles from '../components/member-template/members.module.css';

const siteTitle = 'DSC Mentor';
export default function Mentor() {
	return (
		<>
			<Head>
				<link rel="icon" href="/favicon.ico" />
				<meta name="description" content="DSC Mentor" />
				<meta
					property="og:image"
					content={`https://og-image.now.sh/${encodeURI(
						siteTitle
					)}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
				/>
				<meta name="og:title" content={siteTitle} />
				<meta name="twitter:card" content="summary_large_image" />
				<link
					rel="stylesheet"
					href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css"
				/>
			</Head>
			<img
				src="https://visme.co/blog/wp-content/uploads/2017/07/50-Beautiful-and-Minimalist-Presentation-Backgrounds-012.jpg"
				style={{ position: 'fixed', opacity: 0.1, top: 0 }}
			/>
			<Layout pageName="Mentors">
				<MentorIntro />
				<section>
					<div className={styles.container}>
						<Mentors />
					</div>
				</section>
				<ReadyToTalk />
			</Layout>
		</>
	);
}
