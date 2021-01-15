'use strict';

const { sanitizeEntity } = require('strapi-utils');

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
 * @property {Array<object>} quizzes
 */

function checkRequest(ctx, response) {
	response.status = 400;

	if (!ctx.state || !ctx.state.user) {
		response.status = 403;
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

	response.status = 200;
	return true;
}

async function checkCorrectAnswer(qid, ans, response) {
	const quiz = await strapi.query('quiz').findOne({ id: qid });

	if (!quiz.accepting) {
		response.status = 406;
		response.message = 'this question is no longer accepting responses';
		return false;
	}
	if (quiz.answer === ans) {
		response.correct = true;
		return true;
	}
	response.message = 'wrong answer';
	return false;
}

async function updateUserScore(user, qid, response) {
	if (user.score) {
		// update the user's score

		/**@type {score} */
		const foundScore = await strapi.query('score').findOne({ id: user.score });

		const newAnsweredQuizzesArray = [qid];
		for (const q of foundScore.quizzes) {
			newAnsweredQuizzesArray.push(q.id);
		}

		/**@type {score} */
		const updatedScore = await strapi.services.score.update(
			{ id: foundScore.id },
			{ quizzes: newAnsweredQuizzesArray }
		);

		response.updated = true;
		response.points = updatedScore.quizzes.length;
		response.message = 'correct answer!';
		response.status = 202;
	} else {
		// create a new score for the user

		/**@type {score} */
		const newScore = await strapi.services.score.create({
			users_permissions_user: user.id,
			quizzes: [qid],
		});

		response.created = true;
		response.points = newScore.quizzes.length;
		response.message = 'correct answer!';
		response.status = 201;
	}
}

module.exports = {
	async create(ctx) {
		const response = {
			points: 0, // can remove this field
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

		/**@type {number} */
		const qid = ctx.request.body.qid;

		/**@type {number} */
		const ans = ctx.request.body.ans;

		if ((await checkCorrectAnswer(qid, ans, response)) === false) {
			ctx.status = response.status;
			ctx.body = response;
			return;
		}

		/**@type {user} */
		const user = ctx.state.user;

		await updateUserScore(user, qid, response);

		ctx.status = response.status;
		ctx.body = response;
	},
	async findOne(ctx) {
		const { id } = ctx.params;
		const entity = await strapi.services.score.findOne({ id });
		delete entity.users_permissions_user;
		return sanitizeEntity(entity, { model: strapi.models.score });
	},
};
