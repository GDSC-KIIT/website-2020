import axios from 'axios';
import { useEffect, useState } from 'react';

const token =
	'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjEwMDA3NTc5LCJleHAiOjE2MTI1OTk1Nzl9.khmwxMoq1HCsMAycrvLHpicVyWyAWfIk_NXy2W16fAQ';

// export default function Testing() {
// 	const [data, setData] = useState('loading');

// 	useEffect(() => {
// 		const fetchCall = async () => {
// 			await axios({
// 				headers: {
// 					Authorization: `Bearer ${token}`,
// 				},
// 				url: 'http://localhost:9000/scores',
// 				method: 'POST',
// 				data: {
// 					qid: 8,
// 					ans: 3,
// 				},
// 			})
// 				.then((response) => response.data)
// 				.then((d) => {
// 					console.log(d);
// 					setData(d);
// 				})
// 				.catch((error) => {
// 					if (error.response.data) {
// 						setData(error.response.data);
// 					} else {
// 						console.log('got this error', error);
// 						setData('errored');
// 					}
// 				});
// 		};
// 		fetchCall();
// 	}, []);

// 	return <div>{data === 'loading' ? 'LOADING' : JSON.stringify(data, null, 4)}</div>;
// }

// a user was registerd

const token2 =
	'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjEwNjM5MDg5LCJleHAiOjE2MTMyMzEwODl9.yyw21N8-I2KCcwyBht76f7xTy75LpDVPnHSrFKKvRzU';

/*
a user was registerd 
{…}
​
jwt: 
​
user: Object { id: 1, username: "testuser2", email: "test2@users.com", … }
​
<prototype>: Object { … }
testing.tsx:81:12

*/

export default function LoginTesting() {
	// useEffect(() => {
	// 	axios
	// 		.post('http://localhost:9000/auth/local/register', {
	// 			username: 'testuser2',
	// 			email: 'test2@users.com',
	// 			password: 'testStrongPass123',
	// 		})
	// 		.then((response) => response.data)
	// 		.then((data) => {
	// 			console.info('a user was registerd', data);
	// 		})
	// 		.catch((err) => {
	// 			console.info('could register a user', err);
	// 		});
	// }, []);

	// useEffect(() => {
	// 	//login
	// 	axios
	// 		.post('http://localhost:9000/auth/local', {
	// 			indentifier: 'test2@users.com',
	// 			password: 'testStrongPass123',
	// 		})
	// 		.then((response) => console.info('login data', response.data))
	// 		.catch((err) => console.log('err', err));
	// }, []);

	useEffect(() => {
		axios({
			data: {
				id: 4,
				eye_catcher: 'eye catcher from test',
				title: 'test title',
				link: 'http://nextjs.com',
			},
			url: 'http://localhost:9000/banners',
			headers: {
				Authorization: `Bearer ${token2}`,
			},
			method: 'post',
		})
			.then((response) => response.data)
			.then((data) => {
				console.info('the created banner is ', data);
			})
			.catch((err) => {
				console.info('it failded ', err);
			});
	}, []);
	return <>check console</>;
}
