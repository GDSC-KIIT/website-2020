import Strapi from 'strapi';
import http from 'http';

let instance: any;

export async function setUpStrapiServerAndDatabase() {
	if (!instance) {
		const st = await (Strapi as any)();
		await st.load(); // load the database
		instance = strapi;
		await instance.app.use(instance.router.routes()).use(instance.router.allowedMethods());

		instance.server = http.createServer(instance.app.callback());
	}

	return instance;
}
