import * as Lab from '@hapi/lab';
import * as chai from 'chai';
const expect = chai.expect;

import server, { indexRoute } from '../src/bootstrap';
import { discordRoutes } from '../src/discord';

const lab = Lab.script();
const { describe, it, before, beforeEach, afterEach } = lab;
export { lab };

describe('experiment', () => {
	it('verifies 1 equals 1', () => {
		expect(1).to.equal(1);
	});
});

before(() => {
	server.route([indexRoute, ...discordRoutes]);
});

describe('server can bootstrap', () => {
	beforeEach(async () => {
		await server.initialize();
	});
	afterEach(async () => {
		await server.stop();
	});
	it('responds with 200', async () => {
		const res = await server.inject({
			url: '/',
			method: 'GET',
		});
		expect(res.statusCode).to.equal(200);
	});
	it('just happens', () => {
		expect('tree').to.match(/tree/gi);
	});
});
