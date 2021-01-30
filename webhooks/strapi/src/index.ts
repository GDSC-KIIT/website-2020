import { start } from './bootstrap';

start();

process.on('unhandledRejection', (err) => {
	console.log('unhandled error, exiting ...\n', err);
	process.exit(1);
});
