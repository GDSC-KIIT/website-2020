import Landing from '@/components/Landing';
import ReadyToTalk from '@/components/ReadyToTalk';
import Layout from '@/components/Layout';
export default function Home() {
	return (
		<>
			<Layout pageName="Home">
				<Landing />
				<ReadyToTalk />
			</Layout>
		</>
	);
}
