module.exports = ({ env }) => {
	return {
		upload: {
			provider: 'firebase',
			providerOptions: {
				storageBucket: env('FIREBASE_STORAGEBUCKET'),
			},
		},
	};
};
