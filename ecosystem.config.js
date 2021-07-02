module.exports = {
	apps: [
		{
			name: 'cms_worker',
			script: 'yarn --cwd ./cms/ strapi start',
			env: {
				NODE_ENV: 'production',
			},
			exec_mode: 'fork',
			instances: 1,
			autorestart: false,
		},
		{
			name: 'search_worker',
			script: 'yarn --cwd ./search/cloudflare dev',
			env: {
				NODE_ENV: 'production',
			},
			exec_mode: 'fork',
			instances: 1,
			autorestart: false,
		},
	],
};
