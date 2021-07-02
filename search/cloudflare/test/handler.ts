import { expect } from 'chai';
import { handleRequest } from '../src/handler';

describe('REQUEST RESPONSE CHECKS', () => {
	it('a GET request can be made', async function () {
		const resp = await handleRequest(new Request('/?query=dsc', { method: 'GET' }));
		expect(resp.status).to.equal(200);
		expect(resp.statusText).to.equal('OK');
	});
	it('cors request can be made', async function () {
		const resp = await handleRequest(
			new Request('/?query=dsc', { method: 'GET', mode: 'cors' })
		);
		expect(resp.ok).to.be.true;
	});
	it('another page other than / cannot be found', async function () {
		const resp = await handleRequest(new Request('/another', { method: 'GET' }));
		expect(resp.status).to.equal(400);
	});
	describe('QUERY PARAM', () => {
		it('bad request if "query" key is not provided', async function () {
			const resp = await handleRequest(new Request('/', { method: 'GET' }));
			expect(resp.status).to.equal(400);
			expect(resp.statusText).to.equal('BAD REQUEST');
		});
		it('bad request if "query" value is not provided', async function () {
			const resp = await handleRequest(new Request('/?query=', { method: 'GET' }));
			expect(resp.status).to.equal(400);
		});
	});
});

describe('SEARCH', () => {
	it('json response can be found on query', async function () {
		const json = await (
			await handleRequest(new Request('/?query=dsc', { method: 'GET' }))
		).json();
		expect(json).not.to.be.undefined;
	});
	describe('RESULTANT JSON', () => {
		it('is an array', async function () {
			const json = await (
				await handleRequest(new Request('/?query=dsc', { method: 'GET' }))
			).json();
			expect(json).to.be.an('array');
		});
		it('is not empty', async function () {
			const json = await (
				await handleRequest(new Request('/?query=dsc', { method: 'GET' }))
			).json();
			expect(json).not.to.be.empty;
		});
		it('each object has item and refIndex', async function () {
			const json = await (
				await handleRequest(new Request('/?query=dsc', { method: 'GET' }))
			).json();
			(json as []).forEach((obj: Record<string, unknown>) => {
				expect(obj).to.have.all.keys('refIndex', 'item');
			});
		});
		it('each item in object has name, text, pageName, locId', async function () {
			const json = await (
				await handleRequest(new Request('/?query=dsc', { method: 'GET' }))
			).json();
			(json as []).forEach((obj: Record<string, unknown>) => {
				const item = obj.item;
				expect(item).to.have.all.keys('name', 'text', 'pageName', 'locId');
			});
		});
		it('refindex is a number', async function () {
			const json = await (
				await handleRequest(new Request('/?query=dsc', { method: 'GET' }))
			).json();
			(json as []).forEach((obj: Record<string, unknown>) => {
				expect(obj.refIndex).to.be.a('number');
			});
		});
		it('name, text, pageName, locId are strings', async function () {
			const json = await (
				await handleRequest(new Request('/?query=dsc', { method: 'GET' }))
			).json();
			(json as []).forEach((obj: Record<string, any>) => {
				expect(obj.item.name).to.be.a('string');
				expect(obj.item.text).to.be.a('string');
				expect(obj.item.pageName).to.be.a('string');
				expect(obj.item.locId).to.be.a('string');
			});
		});
		it('pageName should start with /', async function () {
			const json = await (
				await handleRequest(new Request('/?query=dsc', { method: 'GET' }))
			).json();
			(json as []).forEach((obj: Record<string, any>) => {
				const pageNameStarting = obj.item.pageName.split('')[0];
				expect(pageNameStarting).to.equal('/');
			});
		});
	});
});
