const fs = require('fs');
const crypto = require('crypto');

var cryptoSecret = '';

function getPassword() {
	console.log('\x1b[31m', 'Now, trying to decrypt backend.env for env variables', '\x1b[0m \n');

	if (process.env.UNSKIP_DECR?.toUpperCase() === 'TRUE') {
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
		});
	} else if (process.env.NODE_ENV?.toUpperCase() === 'PRODUCTION') {
		console.log(
			'\n \x1b[34m',
			'\x1b[45m',
			'trying now to DECRYPT .env with production passphrase',
			'\x1b[0m \n'
		);

		cryptoSecret = process.env.PROD_DECR;

		dotEnvDecrypter();
	} else {
		console.log('\x1b[45m Using examples env for .env files\x1b[0m');
		createEnvFromExamples();
		return;
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

function createEnvFromExamples() {
	const envExamplesContent = fs.readFileSync('.env.example', { encoding: 'utf-8' });
	fs.writeFileSync('.env', envExamplesContent);
}

getPassword();
