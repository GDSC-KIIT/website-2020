import axios from 'axios';
import marked from 'marked';

import { EventType } from '@/types/index';
import { backendUrls } from '@/lib/backendUrls';
interface IEventData extends EventType {
	media: {
		url: string;
	};
}

export function fetchAllEvents(): Promise<Array<EventType>> {
	return axios
		.get(backendUrls['all_events'])
		.then((response) => response.data)
		.then((data: Array<IEventData>) => {
			if (Array.isArray(data) === false) {
				return [];
			}
			return data.map((event) => ({
				...event,
				description: marked(event.description),
				image: 'http://localhost:9000' + event.media.url, // TODO: Configure the image upload area in the backend
			}));
		})
		.catch((error) => {
			console.log(error, 'while fetching static allevents');
			return [];
		});
}
