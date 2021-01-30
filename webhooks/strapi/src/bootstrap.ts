import { server as HapiServer, Server as IHapiServer } from '@hapi/hapi';

const HOST = process.env.HOST || 'localhost';
const PORT = process.env.PORT || '9001';
const DEBUG_LEVEL = process.env.NODE_ENV === 'development' ? ['*'] : false;

const server = HapiServer({
	debug: { request: DEBUG_LEVEL },
	port: PORT,
	host: HOST,
});

server.route({
	method: 'GET',
	path: '/',
	handler: (req, h) => {
		return { this: true };
	},
});

export async function init(): Promise<IHapiServer> {
	await server.initialize();
	return server;
}

export async function start(): Promise<IHapiServer> {
	await server.start();
	return server;
}

init();
