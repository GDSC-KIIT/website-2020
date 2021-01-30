import * as Lab from '@hapi/lab';
import * as chai from 'chai';
const expect = chai.expect;

import { Server as IHapiServer } from '@hapi/hapi';
import { init } from '../src/bootstrap';

const lab = Lab.script();
const { describe, it, before, beforeEach, afterEach } = lab;
export { lab };

describe('experiment', () => {
	before(() => {});

	it('verifies 1 equals 1', () => {
		expect(1).to.equal(1);
	});
});

describe('server can bootstrap', () => {
	let server: IHapiServer;
	beforeEach(async () => {
		server = await init();
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
});
