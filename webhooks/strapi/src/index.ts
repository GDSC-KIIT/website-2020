import type { ServerRoute } from '@hapi/hapi';

import server, { indexRoute } from './bootstrap';
import { discordRoutes } from './discord';

const routes: ServerRoute[] = [indexRoute, ...discordRoutes];

async function start() {
	await server.start();

	server.route(routes);
	return server;
}

start();

process.on('unhandledRejection', (err) => {
	console.log('unhandled error, exiting ...\n', err);
	process.exit(1);
});