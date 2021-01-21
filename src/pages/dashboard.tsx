import Dashboard from '@/components/UserDashboard';
import Layout from '@/components/Layout';

export default function Profile() {
	return (
		<>
			<Layout pageName="Dashboard">
				<Dashboard />
			</Layout>
		</>
	);
}
