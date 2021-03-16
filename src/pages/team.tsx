import Member from '@/components/Members/members';
import TeamIntro from '@/components/Intro';
import Layout from '@/components/Layout';
import { GetStaticProps } from 'next';
import { fetchAPI } from '../lib/api';
import styles from '@/components/member-template/members.module.css';
type member = {
	id: string;
	name: string;
	position: string;
	image_path: string;
	twitter: string;
	github: string;
	linkedIn: string;
	facebook: string;
	order: number;
};
export default function Team({ allMembersData }: { allMembersData: member[] }) {
	let order: number = -1;
	let displayHeader: boolean = false;

	return (
		<>
			<img
				src="/images/mentors/background.png"
				style={{ position: 'fixed', opacity: 0.1, top: 0, height: '100vh' }}
			/>

			<Layout pageName="Team">
				<TeamIntro />
				<section>
					{/* {console.log(allMembersData)} */}
					<div className={styles.container}>
						{allMembersData.map(({ ...member }) => {
							{
								console.log(order);
							}
							if (member.order > order) {
								order = member.order;
								displayHeader = true;
							} else {
								displayHeader = false;
							}
							// console.log(displayHeader);
							return (
								<Member
									memberInfo={member}
									key={member.id}
									displayHeader={displayHeader}
								/>
							);
						})}
					</div>
				</section>
			</Layout>
		</>
	);
}
export const getStaticProps: GetStaticProps = async () => {
	// Run API calls in parallel
	const allMembersData = await fetchAPI('/members');
	return {
		props: { allMembersData },
		revalidate: 60,
	};
};
