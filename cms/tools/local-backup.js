const sqlite = require('sqlite3');
//@ts-ignore
const SqliteToJSON = require('sqlite-to-json');

const savingTableNames = [
	'badges',
	'banners',
	'members',
	'projects',
	'quizzes',
	'scores',
	'season_scores',
];

function createLocalBackup() {
	const exporter = new SqliteToJSON({
		client: new sqlite.Database('./db/data.db'),
	});
	exporter.tables(function (error, tables) {
		if (error || !tables) {
			return console.log(
				'Could not fetch the tables.\nMake sure you have a db/data.db file!'
			);
		}

		if (!Array.isArray(tables) || tables.length === 0) {
			return console.log('There are no tables in the database!');
		}

		tables.forEach((tableName) => {
			if (!savingTableNames.includes(tableName)) {
				return;
			}
			exporter.save(tableName, `./tools/store/${tableName}.json`, function (err) {
				if (err) {
					console.log('failed to save data for table' + tableName);
					console.log('received the following error: -->', err);
				}
				console.log('saving data for ' + tableName);
			});
		});
	});
}

function run() {
	console.log(
		'--- Also please make sure you are running this file from the cms root or using the yarn backup command'
	);
	console.log('--- Please make sure strapi is not running on localhost:9000 ---');
	createLocalBackup();
}

run();
