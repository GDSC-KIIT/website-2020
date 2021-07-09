import useSWR from 'swr';

import { getUserInfo } from '@/lib/user/getUser';

export default function useUser() {
	const { data, error } = useSWR('user_info', getUserInfo);

	const user = data ?? null;
	const loading = !error && data === undefined;

	return {
		user,
		loading,
	};
}
