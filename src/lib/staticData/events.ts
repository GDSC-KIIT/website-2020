import axios from 'axios';
import { externalUrls } from '@/lib/externalUrls';

interface IEvent {
	id: number;
	description: string;
	date: string;
	relevant_links: string;
}

export function fetchAllEvents(): Promise<Array<IEvent>> {
	return axios
		.get(externalUrls['all_events'])
		.then((response) => response.data)
		.then((data) => {
			if (Array.isArray(data) === false) {
				return [];
			}
			return data;
		})
		.catch((error) => {
			console.log(error, 'while fetching static allevents');
			return [];
		});
}
