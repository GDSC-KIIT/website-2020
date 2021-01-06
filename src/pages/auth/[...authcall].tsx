import type { GetServerSideProps } from 'next';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

import { getUserToken } from '@/lib/user/getUser';
import { storeUserWithToken } from '@/lib/user/storeUser';
import performLogout from '@/lib/user/performLogout';

import { CircularProgress, Grid } from '@material-ui/core';

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

	const jwt = await getUserToken(query.access_token);
	console.log(jwt, 'is the auth token'); // TODO: REMOVE THIS LINE
	storeUserWithToken(ctx, jwt);

	return {
		props: {
			query,
		},
	};
};

export default function AuthCallback() {
	const router = useRouter();

	// TODO: add user logout in a seperate file

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
