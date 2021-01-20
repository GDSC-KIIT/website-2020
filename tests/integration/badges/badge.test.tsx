import { api, testUtils } from '../../utils';

let qid: number;
let scoreId: number;
let badgeId: number;
let seasonScoreId: number;

// the user scores 10 for each question

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
	const d4 = api.updateUserData({ badges: [] });

	await Promise.all([d1, d2, d3, d4]);
});

describe('user gets badges', () => {
	it('get a badge when the user has scored more than limit', async () => {
		seasonScoreId = await api.updateSingleTypeData('http://localhost:9000/season-score', {
			limit: 9,
			badge: badgeId,
		});

		// delete the season score
		await api.deleteSingleTypeData('http://localhost:9000/season-score');

		const { badges } = await api.getUserData();
		expect(badges).toHaveLength(1);
	});

	it('does not get a badge when the user has score less than limit', async () => {
		seasonScoreId = await api.updateSingleTypeData('http://localhost:9000/season-score', {
			limit: 11,
			badge: badgeId,
		});

		await api.deleteSingleTypeData('http://localhost:9000/season-score');

		const { badges } = await api.getUserData();
		expect(badges).toHaveLength(0);
	});
});

describe('the correct badge is issued', () => {
	beforeEach(async () => {
		seasonScoreId = await api.updateSingleTypeData('http://localhost:9000/season-score', {
			limit: 5,
			badge: badgeId,
		});

		await api.deleteSingleTypeData('http://localhost:9000/season-score');
	});

	it('the badge id is same', async () => {
		const user = await api.getUserData();
		const badge = user.badges[0];

		expect(badge.id).toEqual(badgeId);
	});

	it('the badge name is same', async () => {
		const user = await api.getUserData();
		const badge = user.badges[0];

		expect(badge.name).toEqual(testUtils.createdBadge.name);
	});
});
