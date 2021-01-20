import { api, testUtils } from '../../utils';

let qid: number;
let scoreId: number;
let badgeId: number;
let seasonScoreId: number;

// the user scores 10 for each question

describe('user gets badges', () => {
	beforeEach(async () => {
		qid = await api.createData('http://localhost:9000/quizzes', testUtils.createdQuestion1);
		await api.solveQuestion(qid);

		const c1 = api.getFirstDataId('http://localhost:9000/scores');
		const c2 = api.createData('http://localhost:9000/badges', testUtils.createdBadge);
		[scoreId, badgeId] = await Promise.all([c1, c2]);
	});

	afterEach(async () => {
		const d1 = api.deleteData('http://localhost:9000/quizzes', qid);
		const d2 = api.deleteData('http://localhost:9000/scores', scoreId);
		const d3 = api.deleteData('http://localhost:9000/badges', badgeId);

		await Promise.all([d1, d2, d3]);
	});

	it('get a badge when the user has scored more than limit', async () => {
		seasonScoreId = await api.updateSingleTypeData('http://localhost:9000/season-score', {
			limit: 5,
			badge: badgeId,
		});

		// delete the season score
		await api.deleteSingleTypeData('http://localhost:9000/season-score');

		const { badges } = await api.getUserData();
		expect(badges).toHaveLength(1);
	});
});
