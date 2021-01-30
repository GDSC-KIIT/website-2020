import { ServerRoute } from '@hapi/hapi';
import server, { indexRoute } from './bootstrap';

const routes: ServerRoute[] = [indexRoute];

async function start() {
	await server.start();

	server.route({
		path: '/discord',
		method: 'POST',
		handler: (req, h) => {
			console.log('the request was', req.info);

			console.log('the header was', req.headers);
			return { message: 'working' };
		},
	});
	return server;
}

start();

process.on('unhandledRejection', (err) => {
	console.log('unhandled error, exiting ...\n', err);
	process.exit(1);
});
