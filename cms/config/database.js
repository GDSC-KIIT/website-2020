const remoteDBConfig = ({ env }) => {
	return {
		defaultConnection: 'default',
		connections: {
			default: {
				connector: 'bookshelf',
				settings: {
					client: 'postgres',
					database: 'strapi-db-2021',
					host: '127.0.0.1',
					port: 5432,
					username: 'strapi-user-2021',
					password: env('DATABASE_PASSWORD', 'internal-database-password'),
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
