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
	async rewrites() {
		return [
			{
				source: '/backend/:path*',
				destination: process.env.NEXT_PUBLIC_CMS_STRAPI
					? process.env.NEXT_PUBLIC_CMS_STRAPI
					: 'http://localhost:9000/:path*',
			},
		];
	},
};
