import { expect } from 'chai';
import { handleRequest } from '../src/handler';

describe('CHECK ALLOWED METHODS', () => {
	it('GET is allowed', async function () {
		const resp = await handleRequest(new Request('/?query=dsc', { method: 'GET' }));
		expect(resp.status).to.equal(400);
	});
	it('POST is not allowed', async function () {
		const resp = await handleRequest(new Request('/?query=dsc', { method: 'POST' }));
		expect(resp.status).to.equal(404);
	});
});
