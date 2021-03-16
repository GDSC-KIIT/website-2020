import axios, { AxiosError } from 'axios';

import { backendUrls } from '@/lib/backendUrls';
import type { ProjectDataType } from '@/types/index';

export default function fetchProjects(): Promise<Array<ProjectDataType>> {
	return axios
		.get(backendUrls['projects'])
		.then((response) => response.data)
		.then((data: Array<ProjectDataType>) => data)
		.catch((err: AxiosError) => {
			console.log('could not fetch projects', err.name, '\n', err.message);
			return [];
		});
}
