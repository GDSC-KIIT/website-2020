import Strapi from 'strapi';
import http from 'http';
import fs from 'fs';

let instance: any;

export async function setUpStrapi() {
	if (!instance) {
		const st = await (Strapi as any)();
		await st.load(); // load the database
		instance = strapi;
		await instance.app.use(instance.router.routes()).use(instance.router.allowedMethods());

		instance.server = http.createServer(instance.app.callback());
	}

	return instance;
}

export function teardownDatabase() {
	const dbSettings = (strapi as any).config.get('database.connections.default.settings');

	if (dbSettings && dbSettings.filename) {
		// __dirname is /dsckiit-website-2.0/cms/tests/helpers
		// dbSettings.filename is .tmp/test.db
		const tmpDbFile = `${__dirname}/../../${dbSettings.filename}`;
		if (fs.existsSync(tmpDbFile)) {
			fs.unlinkSync(tmpDbFile);
		}
	}
	// done();
}
