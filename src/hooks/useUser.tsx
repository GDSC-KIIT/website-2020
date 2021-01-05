import { useEffect, useState } from 'react';

import { getUserInfo } from '@/lib/user/getUser';
import type { UserInfoType } from '@/types/index';

export default function useUser() {
	const [loading, setLoading] = useState(true);
	const [user, setUser] = useState<UserInfoType | null>(null);

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
