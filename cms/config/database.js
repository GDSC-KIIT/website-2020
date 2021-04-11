// RECOMMENDED ONLY IF A REMOTE DATABASE CONNECTION IS RECEIVED
// THE INTENDED DATABASE TO BE USED AS REMOTE DB HERE IS POSTGRES
const remoteDBConfig = ({ env }) => {
	const dbUriParse = require('pg-connection-string').parse;
	const dbConfig = dbUriParse(env('DATABASE_URL'));

	return {
		defaultConnection: 'default',
		connections: {
			default: {
				connector: 'bookshelf',
				settings: {
					client: 'the database client to use',
					database: dbConfig.database,
					host: dbConfig.host,
					port: dbConfig.port,
					username: dbConfig.user,
					password: dbConfig.password,
					ssl: {
						rejectUnauthorized: false,
					},
				},
				options: {
					ssl: true,
				},
			},
		},
	};
};

const fastConfig = () => ({
	defaultConnection: 'default',
	connections: {
		default: {
			connector: 'bookshelf',
			settings: {
				client: 'sqlite',
				filename: 'db/data.db',
			},
			options: {
				useNullAsDefault: true,
			},
		},
	},
});

const testingConfig = () => ({
	defaultConnection: 'default',
	connections: {
		default: {
			connector: 'bookshelf',
			settings: {
				client: 'sqlite',
				filename: '.tmp-test/test.db',
			},
			options: {
				useNullAsDefault: true,
			},
		},
	},
});

const config =
	process.env.REMOTE_DB?.toUpperCase() === 'TRUE'
		? remoteDBConfig
		: process.env.TESTING?.toUpperCase() === 'TRUE' ||
		  process.env.NODE_ENV?.toUpperCase() === 'TEST'
		? testingConfig
		: fastConfig;

module.exports = config;
