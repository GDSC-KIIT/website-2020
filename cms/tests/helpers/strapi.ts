import Strapi from 'strapi';
import http from 'http';

let instance: any;

export default async function setUpStrapi() {
	if (!instance) {
		await (Strapi as any)().load();
		instance = strapi;
		await instance.app.use(instance.router.routes()).use(instance.router.allowedMethods());

		instance.server = http.createServer(instance.app.callback());
	}

	return instance;
}
