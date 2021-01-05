import type { ReactNode } from 'react';
import useUser from '@/hooks/useUser';

export default function ProfilePage() {
	const { loading, user } = useUser();

	let userInfo: ReactNode = {};

	if (!loading && user && 'username' in user) {
		console.info(user);
		userInfo = (
			<>
				<div>name-{user.username}</div>
				<div>joined at - {user.created_at} </div>
				<div>email - {user.email}</div>
				<div>id - {user.id} </div>
			</>
		);
	}

	return <div>{loading ? 'getting user info' : userInfo}</div>;
}
