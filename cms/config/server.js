module.exports = ({ env }) => ({
	host: env('HOST', '0.0.0.0'),
	port: env.int('PORT', 9000),
	admin: {
		auth: {
			secret:
				process.env.NODE_ENV === 'production'
					? require('crypto').randomFillSync(Buffer.alloc(100)).toString('hex')
					: 'DEV ADMIN JWT',
		},
	},
});
