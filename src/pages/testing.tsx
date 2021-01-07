import axios from 'axios';
import { useEffect, useState } from 'react';

const token =
	'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjEwMDA3NTc5LCJleHAiOjE2MTI1OTk1Nzl9.khmwxMoq1HCsMAycrvLHpicVyWyAWfIk_NXy2W16fAQ';

export default function Testing() {
	const [data, setData] = useState('loading');

	useEffect(() => {
		const fetchCall = async () => {
			await axios
				.get('http://localhost:9000/scores', {
					headers: {
						Authorization: `Bearer ${token}`,
					},
					data: {
						username: 'gamersinstinct1',
					},
				})
				.then((response) => response.data)
				.then((d) => {
					setData(data);
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
