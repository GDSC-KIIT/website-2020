import * as Lab from '@hapi/lab';
// import { expect } from 'chai';
import * as chai from 'chai';
const expect = chai.expect;

const lab = Lab.script();
const { describe, it, before, beforeEach, afterEach } = lab;
export { lab };

describe('experiment', () => {
	before(() => {});

	it('verifies 1 equals 1', () => {
		expect(1).to.equal(1);
	});
});

// describe('server can bootstrap', () => {});
