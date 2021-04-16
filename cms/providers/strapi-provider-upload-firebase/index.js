'use strict';

/**
 * Module dependencies
 */

const admin = require('firebase-admin');

const config = {
	init(providerOptions) {
		const serviceAccount = require('../../firebase-env.json');

		admin.initializeApp({
			credential: admin.credential.cert(serviceAccount),
			storageBucket: providerOptions.storageBucket,
		});

		const bucket = admin.storage().bucket();

		return {
			upload(file) {
				return new Promise((resolve, reject) => {
					const path = file.path ? `${file.path}/` : '';
					const filename = `${path}${file.hash}${file.ext}`;
					const buff = Buffer.from(file.buffer, 'binary');
					const remoteFile = bucket.file(filename);
					remoteFile.save(
						buff,
						{
							resumable: false,
							contentType: file.mime,
							public: true,
						},
						(err) => {
							if (err) {
								reject(err);
							}
							file.url = `https://storage.googleapis.com/${providerOptions.storageBucket}/${filename}`;
							resolve();
						}
					);
				});
			},
			delete(file) {
				return new Promise((resolve, reject) => {
					const path = file.path ? `${file.path}/` : '';
					const filename = `${path}${file.hash}${file.ext}`;
					const remoteFile = bucket.file(filename);
					remoteFile.delete((err, _) => {
						if (err) {
							return reject(err);
						}
						resolve();
					});
				});
			},
		};
	},
};

if (process.env.TESTING?.toUpperCase() === 'TRUE') {
	module.exports = {
		init() {
			// console.info('\x1b[34m skipping firebase config during tests \x1b[0m');

			return {
				upload(file) {
					return Promise.resolve();
				},
				delete(file) {
					return Promise.resolve();
				},
			};
		},
	};
} else {
	module.exports = config;
}
