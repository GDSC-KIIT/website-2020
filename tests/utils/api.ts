import axios from 'axios';

import logger from './logger';

type endpointTypes = 'http://localhost:9000/quizzes';

export function createData(endpoint: endpointTypes, data: Object) {
	return axios({
		url: endpoint,
		data,
		method: 'POST',
	})
		.then((response) => response.data)
		.then((data) => data.id)
		.catch((err) => logger('error', 'Could not create that Data', err));
}

export function deleteData(endpoint: endpointTypes, id: number) {
	return axios({
		url: `${endpoint}/${id}`,
		method: 'DELETE',
	})
		.then((response) => response.data)
		.catch((err) => logger('error', 'Could not delete that Data', err));
}

export function createUser() {
	return axios({
		url: 'http://localhost:9000/auth/local/register',
		method: 'POST',
		data: {
			username: 'testUser1',
			email: 'test1@test.com',
			password: 'testpass123',
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

export function loginUser() {
	return axios({
		url: 'http://localhost:9000/auth/local',
		method: 'POST',
		data: {
			identifier: 'test1@test.com',
			password: 'testpass123',
		},
	})
		.then((response) => response.data)
		.then((data) => data.jwt)
		.catch((err) => {
			logger('error', 'login user', err);
		});
}
