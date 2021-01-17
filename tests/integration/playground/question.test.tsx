import { screen, waitFor, render, cleanup } from '@testing-library/react';
import { api, logger, testUtils } from '../../utils';

import Question from '@/playground/components/question';

jest.mock('@/lib/user/session');

const qids = {
	q1: 0,
	q2: 0,
	q3: 0,
	q4: 0,
};

describe.skip('user not logged in', () => {
	logger('info', 'skipping tests for not logged in user');
});

describe.skip('wrong answer', () => {
	beforeAll(async () => {
		qids.q1 = await api.createData('http://localhost:9000/quizzes', testUtils.createdQuestion1);
	});

	afterAll(async () => {
		await api.deleteData('http://localhost:9000/quizzes', qids.q1);
		cleanup();
	});

	it('shows wrong answer', () => {
		render(<Question />);
		waitFor(
			() => {
				screen.findByText(testUtils.createdQuestion1.question);
			},
			{ timeout: 7000 }
		);
		expect(screen.getByText(testUtils.createdQuestion1.question)).toBeInTheDocument();
	});
});
