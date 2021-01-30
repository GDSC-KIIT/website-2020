import {
	server as HapiServer,
	Server as IHapiServer,
	ServerRoute as IServerRoute,
} from '@hapi/hapi';

const HOST = process.env.HOST || 'localhost';
const PORT = process.env.PORT || '9001';
const DEBUG_LEVEL = process.env.NODE_ENV === 'development' ? ['*'] : false;

const server = HapiServer({
	debug: { request: DEBUG_LEVEL },
	port: PORT,
	host: HOST,
});

export async function init(): Promise<IHapiServer> {
	await server.initialize();
	return server;
}

export const indexRoute: IServerRoute = {
	path: '/',
	method: ['GET', 'POST'],
	handler: (req) => {
		if (req.method === 'post') {
			return { message: 'check the correct route' };
		}
		return { message: 'hapi strapi router' };
	},
};

export default server;
