import fs from 'fs';

/**
 * should only be called if setUpStrapi has been called
 */
export function teardownDatabase() {
	const dbSettings = (strapi as any).config.get('database.connections.default.settings');

	if (dbSettings && dbSettings.filename) {
		// __dirname is /dsckiit-website-2.0/cms/tests/lib
		// dbSettings.filename is .tmp/test.db
		const tmpDbFile = `${__dirname}/../../${dbSettings.filename}`; // this is recommended approach as stated in docs
		if (fs.existsSync(tmpDbFile)) {
			fs.unlinkSync(tmpDbFile);
		}
		/*
		const tmpDbDir = `${__dirname}/../../.tmp-test`; // instead delete the whole folder .temp-test folder
		if (fs.existsSync(tmpDbDir)) {
			fs.rmSync(tmpDbDir, { recursive: true, force: true });
		}
		*/
	}
}
