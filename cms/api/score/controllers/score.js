'use strict';

/**
 * contains the information about the authenticated user
 * @typedef user
 * @type {object}
 * @property {number} id
 * @property {string} username
 * @property {string} provider google should be the selected auth provider
 * @property {string} email
 * @property {number|null} score
 */

/**
 * interested fields to update in the score model
 * @typedef score
 * @type {object}
 * @property {number} id
 * @property {number} points
 */

const INCREMENT = 10;

function checkRequest(ctx, response) {
	response.status = 400;

	if (!ctx.state || !ctx.state.user) {
		response.message = 'user not logged in';
		return false;
	}

	if (!ctx.request.body || !ctx.request.body.qid) {
		response.message = 'did not find the question';
		return false;
	} else if (!ctx.request.body.ans) {
		response.message = 'answer was not provided';
		return false;
	}

	return true;
}

async function checkCorrectAnswer(qid, ans, response) {
	const quiz = await strapi.query('quiz').findOne({ id: qid });
	console.log('found that as', quiz);

	if (!quiz.accepting) {
		response.status = 406;
		response.message = 'this question is no longer accepting responses';
		return false;
	}
	if (quiz.answer === ans) {
		console.log('reached here');
		response.correct = true;
		return true;
	}
	response.message = 'wrong answer';
	return false;
}

async function updateUserScore(user, response) {
	if (user.score) {
		// update the user's score

		/**@type {score} */
		const foundScore = await strapi.query('score').findOne({ id: user.score });

		/**@type {score} */
		const updatedScore = await strapi.services.score.update(
			{ id: foundScore.id },
			{ points: foundScore.points + INCREMENT }
		);

		response.updated = true;
		response.points = updatedScore.points;
		response.message = 'correct answer!';
		response.status = 202;
	} else {
		// create a new score for the user

		/**@type {score} */
		const newScore = await strapi.services.score.create({
			users_permissions_user: user.id,
			points: INCREMENT,
		});

		response.created = true;
		response.points = newScore.points;
		response.message = 'correct answer!';
		response.status = 201;
	}
}

module.exports = {
	async create(ctx) {
		const response = {
			points: 0,
			updated: false,
			created: false,
			status: 200,
			message: '',
			correct: false,
		};

		if (checkRequest(ctx, response) === false) {
			ctx.status = response.status;
			ctx.body = response;
			return;
		}

		/**@type {user} */
		const user = ctx.state.user;

		/**@type {number} */
		const qid = ctx.request.body.qid;

		/**@type {number} */
		const ans = ctx.request.body.ans;

		if ((await checkCorrectAnswer(qid, ans, response)) === false) {
			ctx.status = response.status;
			ctx.body = response;
			return;
		}

		await updateUserScore(user, response);

		ctx.status = response.status;
		ctx.body = response;
	},
};
