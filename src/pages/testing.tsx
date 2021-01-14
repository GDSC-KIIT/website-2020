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

export default function LoginTesting() {
	useEffect(() => {
		axios
			.post('http://localhost:9000/auth/local/register', {
				username: 'testuser1',
				email: 'test@users.com',
				password: 'testStrongPass123',
			})
			.then((response) => response.data)
			.then((data) => {
				console.info('a user was registerd', data);
			})
			.catch((err) => {
				console.info('could register a user', err);
			});
	}, []);

	return <>check console</>;
}
