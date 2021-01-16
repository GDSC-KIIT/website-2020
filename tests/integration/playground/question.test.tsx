import { screen, waitFor, render, cleanup } from '@testing-library/react';
import { mocked } from 'ts-jest/utils';
import { api, logger, testUtils } from '../../utils';

import Questions from '@/playground/components/allQuestions';
import Question from '@/playground/components/question';

import { getSessionAuthToken } from '@/lib/user/session';

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
	const testUser = { token: '' };
	beforeAll(async () => {
		qids.q1 = await api.createData('http://localhost:9000/quizzes', testUtils.question1);
		testUser.token = await api.loginUser();
		mocked(getSessionAuthToken).mockResolvedValue(testUser.token);
		testUtils.mockNextUseRouter({ query: { play: qids.q1 } });
	});

	afterAll(async () => {
		await api.deleteData('http://localhost:9000/quizzes', qids.q1);
		cleanup();
	});

	it('shows wrong answer', () => {
		render(<Question />);
		waitFor(
			() => {
				screen.findByText(testUtils.question1.question);
			},
			{ timeout: 7000 }
		);
		expect(screen.getByText(testUtils.question1.question)).toBeInTheDocument();
	});
});
