const fs = require('fs');
const https = require('https');
const readline = require('readline');

const FILE_LOCATION = './db/data.db';
const DOWNLOAD_URL = 'https://github.com/DSC-KIIT/website/releases/download/v2/data.db';

function showProgress(current, totalFileSize, totalFileSizeInMB) {
	readline.clearLine(process.stdout);
	readline.cursorTo(process.stdout, 0);

	const writeLine =
		'\x1b[33m\x1b[1m Downloading the file -- \x1b[43m\x1b[37m' +
		((100.0 * current) / totalFileSize).toFixed(2) +
		'% \x1b[0m\x1b[33m\x1b[1m (' +
		(current / 1048576).toFixed(2) +
		' MB) of total file size: ' +
		totalFileSizeInMB.toFixed(2) +
		' MB \x1b[0m';

	process.stdout.write(writeLine);
}

function createDBFolder() {
	const folderExists = fs.existsSync('./db');
	if (!folderExists) {
		console.log('\x1b[0m\x1b[1m\x1b[35m Creating db/ folder\x1b[0m');
		fs.mkdirSync('./db');
	}
}

function showError(error) {
	console.log('\x1b[0m\x1b[1m\x1b[31m Failed to Download! \x1b[0m', error);
}

/* discuss whether to take the versino from package.json
function getVersionFromPackageJSON(){
    const fileContent = fs.readFileSync('./package.json',{encoding:'utf-8'})
    const packageJson = JSON.parse(fileContent);
    return packageJson.version;
}
*/

function getFile(url) {
	https.get(url, (response) => {
		if (response.statusCode === 301 || response.statusCode === 302) {
			return getFile(response.headers.location);
		} else if (response.statusCode >= 400 && response.statusCode < 600) {
			return showError(`StatusCode : ${response.statusCode}`);
		}
		const fileStream = fs.createWriteStream(FILE_LOCATION);
		const totalFileSize = parseInt(response.headers['content-length'], 10);
		let current = 0;
		const totalFileSizeInMB = totalFileSize / 1048576;

		response.on('data', (chunk) => {
			current += chunk.length;
			showProgress(current, totalFileSize, totalFileSizeInMB);
		});

		response.on('end', () => {
			console.log('\n\x1b[1m\x1b[32m Download complete!\x1b[0m');
			console.log(' \x1b[0m\x1b[1m\x1b[34mDatabase File saved to \x1b[4m./db/data.db\x1b[0m');
		});

		response.on('error', (err) => {
			return showError(err);
		});

		response.pipe(fileStream);
	});
}

function run() {
	createDBFolder();
	console.log('\x1b[1m\x1b[36m Starting Download ...\x1b[0m');
	getFile(DOWNLOAD_URL);
}

run();
