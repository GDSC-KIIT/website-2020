import axios, { AxiosError } from 'axios';

import { backendUrls } from '@/lib/urls';
import type { MemberDataType } from '@/types/index';

export default function fetchMembersRandomized(): Promise<MemberDataType[]> {
	return axios
		.get(backendUrls['members'])
		.then((response) => response.data)
		.then((data: Array<MemberDataType>) => randomizeArray(data))
		.catch((err: AxiosError) => {
			console.log('Error fetching members', err.name, '\n', err.message);
			return [];
		});
}

function randomizeArray<T>(arr: Array<T>): Array<T> {
	return arr.sort(() => Math.random() - 0.5);
}
