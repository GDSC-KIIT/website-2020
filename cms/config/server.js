module.exports = ({ env }) => ({
	host: env('HOST', '0.0.0.0'),
	port: env.int('PORT', 9000),
	admin: {
		auth: {
			secret: env('ADMIN_JWT_SECRET'),
		},
	},
	url: env('ABSOLUTE_PRODUCTION_URL', 'http://localhost:9000'),
});
