import axios, { AxiosError } from 'axios';

import { staticBackendUrls } from '@/lib/urls';
import type { ProjectDataType } from '@/types/index';

export default function fetchProjects(): Promise<Array<ProjectDataType>> {
	return axios
		.get(staticBackendUrls['projects'])
		.then((response) => response.data)
		.then((data: Array<ProjectDataType>) => data)
		.catch((err: AxiosError) => {
			console.log('could not fetch projects', err.name, '\n', err.message);
			return [];
		});
}
