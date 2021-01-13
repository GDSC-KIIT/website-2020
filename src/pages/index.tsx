import Head from 'next/head';
import Landing from '@/components/Landing';
import ReadyToTalk from '@/components/ReadyToTalk';
import Layout from '@/components/Layout';

export default function Home() {
	// TODO Remove the cdns
	//  labels: landing
	//  assignees: aditya-mitra
	return (
		<>
			<Head key="link">
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
				<link rel="stylesheet" href="./index.css" />
			</Head>

			<Layout pageName="Home">
				<Landing />
				<ReadyToTalk />
			</Layout>
		</>
	);
}
