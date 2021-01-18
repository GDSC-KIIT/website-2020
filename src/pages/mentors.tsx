import Mentors from '@/components/member-template/mentors';
import ReadyToTalk from '@/components/ReadyToTalk';
import MentorIntro from '@/components/Intro/Mentor-intro';
import Layout from '@/components/Layout';
// import Head from 'next/head';
import styles from '../components/member-template/members.module.css';

// const siteTitle = 'DSC Mentor';
export default function Mentor() {
	return (
		<>
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
