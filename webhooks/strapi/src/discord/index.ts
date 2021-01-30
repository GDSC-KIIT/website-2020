import type { ServerRoute, Lifecycle } from '@hapi/hapi';
import { create } from 'domain';
import type { IStrapiEvent } from '../../types/strapi';

const createMessage = (id: number, event: string, model: string, record: 'entry' | 'media') => {
	return `A ${record} with id - ${id}
    was _**${event}d**_ for \`${model.toUpperCase()}\``;
};

const whatHappened = (ev: IStrapiEvent) => {
	console.log('the event was', ev);
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
			return createMessage(ev.entry?.id, event, ev.model, 'entry');
		}

		case 'media.create':
		case 'media.update':
		case 'media.delete': {
			const event = ev.event.split('.')[0];
			return createMessage(ev.entry?.id, event, ev.model, 'media');
		}

		default:
			return `A unknown event was triggered - ${ev.event}`;
	}
};

const handler: Lifecycle.Method = (req) => {
	const payload = req.payload as IStrapiEvent;
	if (!payload) {
		return { done: false };
	}
	const m = whatHappened(payload);
	console.log(m);

	return { done: true };
};

export const discordRoutes: ServerRoute[] = [
	{
		path: '/discord',
		method: 'POST',
		handler,
	},
];
