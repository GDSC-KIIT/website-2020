const strapi = require('strapi');

async function startProductionServer() {
	await strapi().start();
	process.send('ready');
}

startProductionServer();
