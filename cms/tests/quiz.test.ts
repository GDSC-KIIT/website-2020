import request from 'supertest';

import { getUserCredentials, setUpServer, tearDownServer } from './lib';
import { mockQuestion1, mockQuestion2, mockQuestion3 } from './utils';

let strapiServer: any;
beforeAll(async () => {
	await setUpServer();
	strapiServer = (strapi as any).server;
}, 15000);

afterAll((done) => {
	tearDownServer();
	done();
});

describe('1- [UNAUTHENTICATED USER]', () => {
	it('cannot get the questions - FORBIDDEN', async () => {
		await request(strapiServer).get('/quizzes').expect(403);
	});
});

/** an authenticated user is available in all the below tests */
let credentials: Record<string, string>;
beforeAll(async () => {
	credentials = await getUserCredentials();
});

describe('2- [AUTHENTICATED USER]', () => {
	it('route is accessible', async () => {
		const resp = await request(strapiServer).get('/quizzes').set(credentials);
		expect(resp.status).toEqual(200);
		expect(resp.body).toEqual(expect.arrayContaining([]));
	});
	it('cannot post a new question', async () => {
		await request(strapiServer)
			.post('/quizzes')
			.set(credentials)
			.send({ ...mockQuestion1 })
			.expect(403);
	});
});

describe('3- [ALL QUESTIONS]', () => {
	beforeAll(async () => {
		await strapi.db.query('quiz', '').create(mockQuestion1);
		await strapi.db.query('quiz', '').create(mockQuestion2);
		await strapi.db.query('quiz', '').create(mockQuestion3);
	});
	afterAll(async () => {
		await strapi.db.query('quiz', '').delete({});
	});
	it('3 questions are available in the db', async () => {
		/**@ts-ignore */
		const count = await strapi.db.query('quiz', '').count();
		expect(count).toEqual(3);
	});
	it('3 questions can accessed from endpoint', async () => {
		const resp = await request(strapiServer).get('/quizzes').set(credentials);
		expect(resp.status).toEqual(200);
		expect(resp.body).toHaveLength(3);
	});
	it('answers are not visible in response', async () => {
		const resp = await request(strapiServer).get('/quizzes').set(credentials);
		(resp.body as []).map((q) => {
			expect(q).not.toHaveProperty('answer');
		});
	});
	it('responses contain id, accepting, qname', async () => {
		const resp = await request(strapiServer).get('/quizzes').set(credentials);
		(resp.body as []).map((q) => {
			expect(q).toHaveProperty('id');
			expect(q).toHaveProperty('accepting');
			expect(q).toHaveProperty('qname');
		});
	});
	it('matches snapshot', async () => {
		const resp = await request(strapiServer).get('/quizzes').set(credentials);
		/**remove the ids */
		const questions = (resp.body as []).map(({ accepting, qname }) => ({
			qname,
			accepting,
		}));
		expect(questions).toMatchSnapshot();
	});
});

describe('4- [SINGLE QUESTION]', () => {
	let createdQuestionId: number | string;
	beforeAll(async () => {
		const { id } = await strapi.db.query('quiz', '').create(mockQuestion1);
		createdQuestionId = id;
	});
	afterAll(async () => {
		await strapi.db.query('quiz', '').delete({});
	});
	it('question is not accessible to unauthenticated user', async () => {
		await request(strapiServer).get(`/quizzes/${createdQuestionId}`).expect(403);
	});
	it('question does not contain answer', async () => {
		const resp = await request(strapiServer)
			.get(`/quizzes/${createdQuestionId}`)
			.set(credentials);
		expect(resp.body).not.toHaveProperty('answer');
	});
	it('matches snapshot', async () => {
		const resp = await request(strapiServer)
			.get(`/quizzes/${createdQuestionId}`)
			.set(credentials);
		delete resp.body.id;
		delete resp.body.created_at;
		delete resp.body.updated_at;
		expect(resp.body).toMatchSnapshot();
	});
});
