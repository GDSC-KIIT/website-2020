import * as Lab from '@hapi/lab';
import { expect } from 'chai';
import sinon, { SinonStub } from 'sinon';

import axios from 'axios';
import { ServerInjectResponse } from '@hapi/hapi';
import server, { indexRoute } from '../src/bootstrap';
import { discordRoutes } from '../src/discord';
import {
	strapiEntryPayload,
	strapiMediaPayload,
	strapiEntryPayloadMany,
	strapiMediaPayloadMany,
	isWordInString,
} from './utils';

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
	it('responds with 200', { timeout: 2000 }, async () => {
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
			expect(payload.done).to.be.false;
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
		let res: ServerInjectResponse;
		beforeEach(async () => {
			res = await server.inject({
				url: '/discord',
				method: 'POST',
				payload: { ...strapiEntryPayload },
			});
		});

		it('responds with 200', () => {
			expect(res.statusCode).to.eq(200);
		});

		it('has done-true', () => {
			const resp = JSON.parse(res.payload);
			expect(resp.done).to.be.true;
		});

		it('handles many entries action', async () => {
			const res = await server.inject({
				url: '/discord',
				method: 'POST',
				payload: { ...strapiEntryPayloadMany },
			});

			expect(res.statusCode).to.eq(200);
		});

		it('sends a request to discord webhook', () => {
			expect(stub.called).to.be.true;
		});

		it('the request to discord webhook has the correct message', () => {
			const messageArgument = stub.getCall(0).args[1];
			expect(messageArgument).to.have.property('content');
			const { content } = messageArgument;
			expect(isWordInString('entry', content)).to.be.true;
			expect(isWordInString('create', content)).to.be.true;
		});
	});

	describe('media payload', () => {
		let res: ServerInjectResponse;

		beforeEach(async () => {
			res = await server.inject({
				url: '/discord',
				method: 'POST',
				payload: { ...strapiMediaPayload },
			});
		});

		it('responds with 200', () => {
			expect(res.statusCode).to.eq(200);
		});

		it('responds with 200', () => {
			const resp = JSON.parse(res.payload);
			expect(resp.done).to.be.true;
		});

		it('handles many media action', async () => {
			const res = await server.inject({
				url: '/discord',
				method: 'POST',
				payload: { ...strapiMediaPayloadMany },
			});

			expect(res.statusCode).to.eq(200);
		});

		it('sends a request to discord webhook', () => {
			expect(stub.called).to.be.true;
		});

		it('the request to discord webhook has the correct message', () => {
			const messageArgument = stub.getCall(0).args[1];
			expect(messageArgument).to.have.property('content');
			const { content } = messageArgument;
			expect(isWordInString('image', content)).to.be.true;
			expect(isWordInString('delete', content)).to.be.true;
		});
	});
});
