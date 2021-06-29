const SqliteToJson = require('sqlite-to-json');
const sqlite3 = require('sqlite3');
const exporter = new SqliteToJson({
	client: new sqlite3.Database('./db/data.db'),
});
exporter.tables(function (err, tables) {
	console.log('the table names are', tables);

	tables?.forEach((table) => {
		exporter.save(table, './backup/' + table + '.json', function (err) {
			console.log('error while saving ', table);
		});
	});
});
