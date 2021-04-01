import type { GetStaticProps } from 'next';

import fetchMembersGrouped from '@/lib/staticData/members';

import Members, { IMembers } from '@/components/Members';
import TeamIntro from '@/components/Intro';
import Layout from '@/components/Layout';

export default function Team({ members }: IMembers) {
	return (
		<>
			<img
				src="/images/mentors/background.png"
				style={{ position: 'fixed', opacity: 0.1, top: 0, height: '100vh' }}
			/>
			<Layout pageName="Team">
				<TeamIntro />
				<Members members={members} />
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
