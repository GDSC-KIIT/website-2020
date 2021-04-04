import fs from 'fs';

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
}
