const fs = require('fs');
const crypto = require('crypto');

var cryptoSecret = '';

function getPassword() {
	console.log(
		'\x1b[31m',
		'Now, trying to decrypt backend.env and firebase-env for env variables',
		'\x1b[0m \n'
	);

	if (process.env.SKIP_DECR === 'TRUE') {
		console.log('\x1b[45m skipping env variables \x1b[0m');
		return;
	} else if (process.env.NODE_ENV === 'production' || process.env.NODE_ENV === 'PRODUCTION') {
		console.log(
			'\n \x1b[34m',
			'\x1b[45m',
			'trying now to DECRYPT .env with production passphrase',
			'\x1b[0m \n'
		);

		cryptoSecret = process.env.PROD_DECR;

		dotEnvDecrypter();
		firebaseEnvDecrypter();
	} else {
		const rl = require('readline').createInterface({
			input: process.stdin,
			output: process.stdout,
		});

		rl.question('enter password = ', (pass) => {
			cryptoSecret = pass;
			console.log(
				'\n \x1b[34m',
				'\x1b[45m',
				'trying now to DECRYPT .env with given passphrase',
				'\x1b[0m \n'
			);

			rl.close();

			dotEnvDecrypter();
			firebaseEnvDecrypter();
		});
	}
}

function dotEnvDecrypter() {
	const fileContent = fs.readFileSync('backend.env', { encoding: 'utf8' });

	// decrypt this using cryptojs

	const secret = cryptoSecret;
	const algo = 'aes-192-cbc';
	const key = crypto.scryptSync(secret, 'salt', 24);
	const iv = Buffer.alloc(16, 0);

	const decipher = crypto.createDecipheriv(algo, key, iv);
	let decryptedText = decipher.update(fileContent, 'base64', 'utf8');
	decryptedText += decipher.final('utf8');

	// make the file

	fs.writeFileSync('.env', decryptedText, { encoding: 'utf8' });

	console.log('\x1b[43m', '.env file created', '\x1b[0m \n');
}

function firebaseEnvDecrypter() {
	const fileContent = fs.readFileSync('firebase-env', { encoding: 'utf8' });

	// decrypt this using cryptojs

	const secret = cryptoSecret;
	const algo = 'aes-192-cbc';
	const key = crypto.scryptSync(secret, 'salt', 24);
	const iv = Buffer.alloc(16, 0);

	const decipher = crypto.createDecipheriv(algo, key, iv);
	let decryptedText = decipher.update(fileContent, 'base64', 'utf8');
	decryptedText += decipher.final('utf8');

	// make the file

	fs.writeFileSync('firebase-env.json', decryptedText, { encoding: 'utf8' });

	console.log('\x1b[43m', 'firebase-env.json file created', '\x1b[0m \n');
}

getPassword();
