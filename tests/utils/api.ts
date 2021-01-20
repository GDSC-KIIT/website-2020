import axios from 'axios';
import { createdUser } from './testUtils';

import logger from './logger';

type endpointTypes =
	| 'http://localhost:9000/quizzes'
	| 'http://localhost:9000/scores'
	| 'http://localhost:9000/badges'
	| 'http://localhost:9000/season-score';

export async function createData(endpoint: endpointTypes, data: Object) {
	return axios({
		url: endpoint,
		data,
		method: 'POST',
	})
		.then((response) => response.data)
		.then((data) => data.id)
		.catch((err) => logger('error', 'Could not create that Data', err));
}

export async function deleteData(endpoint: endpointTypes, id: number) {
	return axios({
		url: `${endpoint}/${id}`,
		method: 'DELETE',
	})
		.then((response) => response.data)
		.catch((err) => logger('error', 'Could not delete that Data', err));
}

export async function getFirstDataId(endpoint: endpointTypes) {
	const authToken = await loginUser();

	return axios({
		url: endpoint,
		method: 'GET',
		headers: { Authorization: `Bearer ${authToken}` },
	})
		.then((response) => response.data)
		.then((data) => {
			return data[0].id;
		})
		.catch((err) => {
			logger('error', 'could not get the first data', err);
			return null;
		});
}

export async function updateSingleTypeData(endpoint: endpointTypes, data: object) {
	return axios({
		url: endpoint,
		method: 'PUT',
		data,
	})
		.then((response) => response.data)
		.catch((err) => logger('error', 'could not update that single type', err));
}

export async function deleteSingleTypeData(endpoint: endpointTypes) {
	return axios({
		url: endpoint,
		method: 'DELETE',
	})
		.then((response) => response.data)
		.catch((err) => logger('error', 'could not delte that single type', err));
}

export async function createUser() {
	return axios({
		url: 'http://localhost:9000/auth/local/register',
		method: 'POST',
		data: {
			username: createdUser.username,
			email: createdUser.email,
			password: createdUser.password,
		},
	})
		.then((response) => response.data)
		.catch((err) =>
			logger(
				'error',
				'Could not create a new user,\n A user with the same name might already exist in the db',
				err
			)
		);
}

export async function loginUser() {
	return axios({
		url: 'http://localhost:9000/auth/local',
		method: 'POST',
		data: {
			identifier: createdUser.email,
			password: createdUser.password,
		},
	})
		.then((response) => response.data)
		.then((data) => data.jwt)
		.catch((err) => {
			logger('error', 'login user', err);
		});
}

export async function getUserData() {
	return axios({
		url: 'http://localhost:9000/users/' + createdUser.id,
		method: 'GET',
	})
		.then((response) => response.data)
		.catch((err) => logger('error', 'could not get user info', err));
}

export async function solveQuestion(qid: number, ans = 4) {
	const authToken = await loginUser();

	await axios({
		url: 'http://localhost:9000/scores',
		method: 'POST',
		headers: { Authorization: `Bearer ${authToken}` },
		data: { qid, ans },
	})
		.then(() => logger('info', `solved question ${qid}`))
		.catch((err) => {
			logger('error', 'could not solve the question', err);
		});
}
