module.exports = {
	reactStrictMode: true,
	webpack: (config, { dev }) => {
		config.module.rules.push({
			test: /tests\/.*/,
			loader: 'ignore-loader',
		});
		return config;
	},
	images: {
		domains: ['res.cloudinary.com'],
	},
};
