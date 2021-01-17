import Member from '@/components/member-template/members';
import ReadyToTalk from '@/components/ReadyToTalk';
import TeamIntro from '@/components/Intro';
import Layout from '@/components/Layout';
import { GetStaticProps } from 'next';
import { fetchAPI } from '../lib/api';
import { useEffect } from 'react';
import Head from 'next/head';
import styles from '@/components/member-template/members.module.css';
let order = -1;
let displayHeader = false;
const siteTitle = 'DSC Team';
export default function Team({
	allMembersData,
}: {
	allMembersData: {
		id: string;
		name: string;
		position: string;
		image_path: string;
		twitter: string;
		github: string;
		linkedIn: string;
		order: number;
	}[];
}) {
	useEffect(() => {
		order = -1;
	});

	return (
		<>
			<Head>
				<link rel="icon" href="/favicon.ico" />
				<meta name="description" content="DSC Team" />
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
					href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css"
					integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z"
					crossOrigin="anonymous"
				/>
				<link
					rel="stylesheet"
					href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css"
				/>
			</Head>
			<img
				src="https://i.imgur.com/tzzAJeX.png"
				style={{ position: 'fixed', opacity: 0.1, top: 0 }}
			/>

			<Layout pageName="Team">
				<TeamIntro />
				<section>
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
							// console.log(displayHeader)
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
				<ReadyToTalk />
			</Layout>
			<script
				src="https://code.jquery.com/jquery-3.5.1.slim.min.js"
				integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj"
				crossOrigin="anonymous"></script>
			<script
				src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js"
				integrity="sha384-9/reFTGAW83EW2RDu2S0VKaIzap3H66lZH81PoYlFhbGU+6BZp6G7niu735Sk7lN"
				crossOrigin="anonymous"></script>
			<script
				src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"
				integrity="sha384-B4gt1jrGC7Jh4AgTPSdUtOBvfO8shuf57BaghqFfPlYxofvL8/KUEfYiJOMMV+rV"
				crossOrigin="anonymous"></script>
		</>
	);
}
export const getStaticProps: GetStaticProps = async () => {
	// Run API calls in parallel
	const allMembersData = await fetchAPI('/members');
	return {
		props: { allMembersData },
	};
};
