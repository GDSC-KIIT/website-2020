import axios from 'axios';
import { useEffect, useState } from 'react';

const token =
	'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjEwMDA3NTc5LCJleHAiOjE2MTI1OTk1Nzl9.khmwxMoq1HCsMAycrvLHpicVyWyAWfIk_NXy2W16fAQ';

export default function Testing() {
	const [data, setData] = useState('loading');

	useEffect(() => {
		const fetchCall = async () => {
			await axios({
				headers: {
					Authorization: `Bearer ${token}`,
				},
				url: 'http://localhost:9000/scores',
				method: 'POST',
			})
				.then((response) => response.data)
				.then((d) => {
					console.log(d);
					setData(d);
				})
				.catch((error) => {
					console.log('got this error', error);
					setData('errored');
				});
		};
		fetchCall();
	}, []);

	return <div>{data === 'loading' ? 'LOADING' : JSON.stringify(data, null, 4)}</div>;
}
