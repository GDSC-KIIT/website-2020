import type { ServerRoute, Lifecycle } from '@hapi/hapi';
import type { IStrapiEvent } from '../../types/strapi';
import type { IDiscordData } from '../../types/discord';

import axios from 'axios';

const DISCORD_URL = process.env.DISCORD_URL || 'none';

const createMessage = (event: string, entry: IStrapiEvent['entry'], model: string): string => {
	if (Array.isArray(entry)) {
		const idsArray = entry.map((e) => e.id);

		return `Many entries with ids - \`${idsArray.toString()}\`
        were _**${event}d**_ for **\`${model.toUpperCase()}\`**`;
	}

	return `An entry with id - \`${entry.id}\`
    was _**${event}d**_ for **\`${model.toUpperCase()}\`**`;
};

const createMediaMessage = (event: string, media: IStrapiEvent['media']) => {
	if (Array.isArray(media)) {
		const mimesArray = media.map((m) => m.mime.split('/')[0]);
		const idsArray = media.map((m) => m.id);
		const urlsArray = media.map((m) => m.url);

		return `Many *${mimesArray.toString()}* was ${event}d with ida - \`${idsArray.toString()}\`.
        They can be found here - **${urlsArray.toString()}**`;
	}

	const mime = media?.mime.split('/')[0];
	return `An *${mime.toUpperCase()}* was ${event}d with id - \`${media.id}\`.
    It can be found here - **${media.url}**`;
};

const whatHappened = (ev: IStrapiEvent): string => {
	switch (ev.event) {
		case 'trigger-test':
			return `Webhook is working 🎉
            Triggered at ${ev.created_at}`;

		case 'entry.create':
		case 'entry.update':
		case 'entry.publish':
		case 'entry.unpublish':
		case 'entry.delete': {
			const event = ev.event.split('.')[1];
			return createMessage(event, ev.entry, ev.model);
		}

		case 'media.create':
		case 'media.update':
		case 'media.delete': {
			const event = ev.event.split('.')[1];
			return createMediaMessage(event, ev.media);
		}

		default:
			return `A unknown event was triggered - ${ev.event}`;
	}
};

const sendToDiscordChannel = (message: string): void => {
	const data: IDiscordData = {
		content: message,
	};
	axios.post(DISCORD_URL, data);
};

const handler: Lifecycle.Method = (req, h) => {
	const payload = req.payload as IStrapiEvent;
	if (!instanceOfStrapiEvent(payload)) {
		return h.response({ done: false }).code(400);
	}

	const message = whatHappened(payload);
	sendToDiscordChannel(message);

	return { done: true };
};

export const discordRoutes: ServerRoute[] = [
	{
		path: '/discord',
		method: 'POST',
		handler,
	},
];

function instanceOfStrapiEvent(obj: any): obj is IStrapiEvent {
	return obj && typeof obj === 'object' && 'event' in obj && ('entry' in obj || 'media' in obj);
}
