import Layout from '@/components/Layout';
import MentorIntro from '@/components/Mentors/intro';
import Mentors from '@/components/Mentors';
import styles from '@/styles/mentors.module.css';

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
