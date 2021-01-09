'use strict';

/**
 * Module dependencies
 */

const admin = require('firebase-admin');

const serviceAccount = require('../../firebase-env.json');

module.exports = {
	init(providerOptions) {
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
