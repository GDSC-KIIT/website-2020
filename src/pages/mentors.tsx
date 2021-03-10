import Mentors from '@/components/member-template/mentors';
import MentorIntro from '@/components/Intro/Mentor-intro';
import Layout from '@/components/Layout';
import styles from '@/components/member-template/members.module.css';

export default function Mentor() {
	return (
		<>
			<img
				src="/images/mentors/background.png"
				style={{ position: 'fixed', opacity: 0.1, top: 0 }}
			/>
			<Layout pageName="Mentors">
				<MentorIntro />
				<section>
					<div className={styles.container}>
						<Mentors />
					</div>
				</section>
			</Layout>
		</>
	);
}
