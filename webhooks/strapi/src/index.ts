import { server as HapiServer, Server as IHapiServer } from '@hapi/hapi';

const HOST = process.env.HOST || 'localhost';
const PORT = process.env.PORT || '9001';
const DEBUG_LEVEL = process.env.NODE_ENV === 'development' ? ['*'] : false;

async function init(): Promise<IHapiServer> {
	const server = HapiServer({
		debug: { request: DEBUG_LEVEL },
		port: PORT,
		host: HOST,
	});

	server.route({
		method: 'GET',
		path: '/',
		handler: (req, h) => {
			return 'Found it';
		},
	});

	console.log('started server on ', PORT, DEBUG_LEVEL);
	await server.start();

	return server;
}

init();
