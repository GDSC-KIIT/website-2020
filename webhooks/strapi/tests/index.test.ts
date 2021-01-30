import * as Lab from '@hapi/lab';
import { expect } from 'chai';
import sinon, { SinonSpy, SinonStub } from 'sinon';

import axios from 'axios';
import server, { indexRoute } from '../src/bootstrap';
import { discordRoutes } from '../src/discord';
import { strapiEntryPayload, strapiMediaPayload } from './utils';

const lab = Lab.script();
const { describe, it, before, beforeEach, afterEach } = lab;
export { lab };

describe('experiment', () => {
	it('verifies 1 equals 1', () => {
		expect(1).to.eq(1);
	});
});

before(() => {
	server.route([indexRoute, ...discordRoutes]);
});

beforeEach(() => server.initialize());

afterEach(() => server.stop());

describe('server can bootstrap', () => {
	it('responds with 200', async () => {
		const res = await server.inject({
			url: '/',
			method: 'GET',
		});
		expect(res.statusCode).to.eq(200);
	});
	it('just happens', () => {
		expect('tree').to.match(/tree/gi);
	});
});

describe('discord webhook functions', () => {
	let spy: SinonSpy;
	let stub: SinonStub;
	beforeEach(() => {
		stub = sinon.stub(axios, 'post');
	});
	afterEach(() => {
		stub.restore();
	});

	describe('incorrect request payload', () => {
		it('has status code 400', async () => {
			const res = await server.inject({
				url: '/discord',
				method: 'POST',
			});

			expect(res.statusCode).to.eq(400);
		});

		it('has done-false', async () => {
			const res = await server.inject({
				url: '/discord',
				method: 'POST',
			});

			const payload = JSON.parse(res.payload);

			expect(payload).to.have.property('done');
			expect(payload.done).to.false;
		});

		it('event is missing', async () => {
			const payload = { ...strapiEntryPayload };
			delete payload.event;
			const res = await server.inject({
				url: '/discord',
				method: 'POST',
				payload,
			});

			expect(res.statusCode).to.eq(400);
		});

		it('entry is missing', async () => {
			const payload = { ...strapiEntryPayload };
			delete payload.entry;
			const res = await server.inject({
				url: '/discord',
				method: 'POST',
				payload,
			});

			expect(res.statusCode).to.eq(400);
		});

		it('media is missing', async () => {
			const payload = { ...strapiMediaPayload };
			delete payload.media;
			const res = await server.inject({
				url: '/discord',
				method: 'POST',
				payload,
			});

			expect(res.statusCode).to.eq(400);
		});
	});

	describe('entry payload', () => {
		it('responds with 200', async () => {
			const res = await server.inject({
				url: '/discord',
				method: 'POST',
				payload: { ...strapiEntryPayload },
			});

			expect(res.statusCode).to.eq(200);
		});
	});

	describe('media payload', () => {
		it('responds with 200', async () => {
			const res = await server.inject({
				url: '/discord',
				method: 'POST',
				payload: { ...strapiMediaPayload },
			});

			expect(res.statusCode).to.eq(200);
		});
	});
});
