import { waitFor, render, cleanup } from '@testing-library/react';
import { act } from 'react-test-renderer';
import { mocked } from 'ts-jest/utils';
import { api, testUtils } from '../../utils';

import Questions from '@/playground/components/allQuestions';

import { getSessionAuthToken } from '@/lib/user/session';
jest.mock('@/lib/user/session');

const qids = {
	q1: 0,
	q2: 0,
	q3: 0,
	q4: 0,
};

describe('when user is not logged in', () => {
	beforeAll(async () => {
		qids.q1 = await api.createData('http://localhost:9000/quizzes', testUtils.question1);
	});

	afterAll(async () => {
		await api.deleteData('http://localhost:9000/quizzes', qids.q1);
		cleanup();
	});

	it('shows not logged', () => {
		const { getByTestId } = render(<Questions />);
		expect(getByTestId('loader')).toBeInTheDocument();

		act(() => {
			waitFor(() => {
				expect(getByTestId('not-loggedin')).toBeInTheDocument();
			});
		});
	});

	it('no question is available', () => {
		const { getByTestId } = render(<Questions />);
		act(() => {
			waitFor(() => {
				expect(getByTestId('not-loggedin')).toBeInTheDocument();
				expect(getByTestId(`question-${qids.q1}`)).not.toBeInTheDocument();
			});
		});
	});
});

describe('when user is logged in', () => {
	const testUser = { token: '' };
	beforeAll(async () => {
		[qids.q1, qids.q2, qids.q3] = await Promise.all([
			api.createData('http://localhost:9000/quizzes', testUtils.question1),
			api.createData('http://localhost:9000/quizzes', testUtils.question2),
			api.createData('http://localhost:9000/quizzes', testUtils.question3),
		]);
		testUser.token = await api.loginUser();
		console.log('THE LOGGED IN USER IS', testUser.token);
	});

	afterAll(async () => {
		await Promise.all([
			api.deleteData('http://localhost:9000/quizzes', qids.q1),
			api.deleteData('http://localhost:9000/quizzes', qids.q2),
			api.deleteData('http://localhost:9000/quizzes', qids.q3),
		]);
		cleanup();
	});

	it('questions are available to the user', async () => {
		mocked(getSessionAuthToken).mockResolvedValue(testUser.token);
		const { getByTestId } = render(<Questions />);
		await waitFor(() => {
			expect(getByTestId(`question-${qids.q3}`)).toBeInTheDocument();
		});
	});
});
