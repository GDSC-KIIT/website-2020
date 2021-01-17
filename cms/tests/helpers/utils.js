const fs = require('fs');
const path = require('path');

module.exports = {
	deleteDB: () => {
		if (!strapi) return;

		const dbSettings = strapi.config.get('database.connections.default.settings');

		const tmpDbFile = `${__dirname}/../../${dbSettings.filename}`;

		const loc = path.resolve(tmpDbFile);

		if (dbSettings && dbSettings.filename) {
			if (fs.existsSync(loc)) {
				// console.log('does file exist', fs.existsSync(loc));
				fs.unlinkSync(loc);
				// console.log('does file exist', fs.existsSync(loc));
			}
		}
	},
};
