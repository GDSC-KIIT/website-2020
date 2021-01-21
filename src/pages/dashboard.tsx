import Dashboard from '@/components/UserDashboard';
import ReadyToTalk from '@/components/ReadyToTalk';
import Layout from '@/components/Layout';

export default function Mentor() {
	return (
		<>
			<Layout pageName="Dashboard">
				<Dashboard />
				<ReadyToTalk />
			</Layout>
		</>
	);
}
