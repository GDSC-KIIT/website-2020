import type { ServerRoute, Lifecycle } from '@hapi/hapi';
import type { IStrapiEvent } from '../../types/strapi';

const whatHappened = (ev: IStrapiEvent) => {
	switch (ev.event) {
		case 'trigger-test':
			return `Webhook is working 🎉
            Triggered at ${ev.created_at}`;

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
