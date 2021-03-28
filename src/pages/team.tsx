import type { GetStaticProps } from 'next';

import fetchMembersGrouped from '@/lib/staticData/members';

import Members, { IMembers } from '@/components/Members';
import TeamIntro from '@/components/Intro';
import Layout from '@/components/Layout';

import styles from '@/styles/members.module.css';

export default function Team({ members }: IMembers) {
	return (
		<>
			<img
				src="/images/mentors/background.png"
				style={{ position: 'fixed', opacity: 0.1, top: 0, height: '100vh' }}
			/>
			<Layout pageName="Team">
				<TeamIntro />
				<section>
					<div className={styles.container}>
						<Members members={members} />
					</div>
				</section>
			</Layout>
		</>
	);
}

export const getStaticProps: GetStaticProps<IMembers> = async () => {
	const members = await fetchMembersGrouped();

	return {
		props: { members },
		revalidate: 60,
	};
};
