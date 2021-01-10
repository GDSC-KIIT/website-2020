const fs = require('fs');
const path = require('path');

module.exports = {
	deleteDB: () => {
		if (!strapi) return;

		const dbSettings = strapi.config.get('database.connections.default.settings');

		const tmpDbFile = `${__dirname}/../../${dbSettings.filename}`;

		const p = path.resolve(tmpDbFile);

		if (dbSettings && dbSettings.filename) {
			if (fs.existsSync(p)) {
				console.log('does file exist', fs.existsSync(p));
				fs.unlinkSync(p);
				console.log('does file exist', fs.existsSync(p));
			}
		}
	},
};
