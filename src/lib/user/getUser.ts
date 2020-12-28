import axios from 'axios';

const token: string =
	'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiaWF0IjoxNjA5MTU4OTkyLCJleHAiOjE2MTE3NTA5OTJ9.Zu7x7SiDPCfL2-gK4lM4eQm8K9vjfW0RXZEiukxHY4I';

export function getUser() {
	return axios({
		method: 'GET',
		url: 'http://localhost:9000/sample-authenticated-views',
		headers: {
			Authorization: `Bearer ${token}`,
		},
	})
		.then((response) => response.data)
		.then((data) => {
			console.log('the data recieved was ', data);
		})
		.catch((err) => {
			console.info(err);
		});
}
