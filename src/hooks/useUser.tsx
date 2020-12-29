import { useEffect, useState } from 'react';

import { getUserInfo } from '@/lib/user/getUser';
import { UserInfoType } from '../types';

export default function useUser() {
	const [loading, setLoading] = useState(true);
	const [user, setUser] = useState<UserInfoType | {}>({});

	useEffect(() => {
		const FetchUserInfo = async () => {
			const userInfo = await getUserInfo();
			setUser(userInfo);
			setLoading(false);
		};
		FetchUserInfo();
	}, []);

	return {
		loading,
		user,
	};
}
