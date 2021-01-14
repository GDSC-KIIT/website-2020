import axios from 'axios';

type endpointTypes = 'http://localhost:9000/quizzes';

export function createData(endpoint: endpointTypes, data: Object) {
	return axios({
		url: endpoint,
		data,
		method: 'POST',
	})
		.then((response) => response.data)
		.then((data) => data.id)
		.catch((err) => console.log('in test', err));
}

export function deleteData(endpoint: endpointTypes, id: number) {
	return axios({
		url: `${endpoint}/${id}`,
		method: 'DELETE',
	})
		.then((response) => response.data)
		.catch((err) => console.log('in test', err));
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
		.catch((err) => console.log('in test, could not create user', err));
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
		.catch(() => {
			console.log('could not login in user during test');
		});
}
