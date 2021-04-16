module.exports = {
	settings: {
		logger: {
			level: process.env.NODE_ENV?.toUpperCase() === 'PRODUCTION' ? 'info' : 'debug',
		},
	},
};
