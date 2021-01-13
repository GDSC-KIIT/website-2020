import type { GetServerSideProps } from 'next';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import axios from 'axios';

import { backendUrls } from '@/lib/backendUrls';
import { storeUserWithToken } from '@/lib/user/session';
import performLogout from '@/lib/user/performLogout';

import { CircularProgress, Grid } from '@material-ui/core';

function _getUserToken(access_token: string | string[] | undefined) {
	return axios
		.get(backendUrls['auth_callback'] + access_token)
		.then((response) => response.data)
		.then((data: IData) => data.jwt)
		.catch((err) => {
			console.log(err, 'while fetching user token');
			return null;
		});
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
	const { query, params } = ctx;

	if (params && Array.isArray(params.authcall) && params.authcall[0] === 'logout') {
		performLogout(ctx);
		return {
			props: {
				stat: 'logged out',
			},
		};
	}

	const jwt = await _getUserToken(query.access_token);
	// TODO REMOVE THIS LINE before production
	//  labels: production
	console.log(jwt, 'is the auth token');
	storeUserWithToken(ctx, jwt);

	return {
		props: {
			query,
		},
	};
};

export default function AuthCallback() {
	const router = useRouter();

	// TODO add user logout in a seperate file

	useEffect(() => {
		router.push('/');
	}, []);

	return (
		<Grid
			container
			spacing={0}
			direction="column"
			alignItems="center"
			justify="center"
			style={{ minHeight: '100vh' }}>
			<CircularProgress color="secondary" size={100} />
		</Grid>
	);
}

interface IData {
	jwt: string;
	user: {
		username: string;
		email: string;
		provider: 'google' | string;
	};
}
