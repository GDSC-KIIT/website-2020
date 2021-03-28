import axios, { AxiosError } from 'axios';

import { backendUrls } from '@/lib/urls';
import type { MemberDataType } from '@/types/index';

export default function fetchMembers(): Promise<MemberDataType[]> {
	return axios
		.get(backendUrls['members'])
		.then((response) => response.data)
		.then((data: Array<MemberDataType>) => data)
		.catch((err: AxiosError) => {
			console.log('Error fetching members', err.name, '\n', err.message);
			return [];
		});
}
