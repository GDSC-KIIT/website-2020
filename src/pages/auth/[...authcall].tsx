import { GetServerSideProps } from 'next';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

import { getUserToken } from '@/lib/user/getUser';
import { storeUserWithToken } from '@/lib/user/storeUser';

import { CircularProgress, Grid } from '@material-ui/core';

export const getServerSideProps: GetServerSideProps = async (ctx) => {
	const { query } = ctx;
	const jwt = await getUserToken(query.access_token);
	storeUserWithToken(ctx, jwt);
	return {
		props: {
			query,
		},
	};
};

export default function AuthCallback() {
	const router = useRouter();

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
