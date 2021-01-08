import type { GetServerSidePropsContext } from 'next';
import type { ParsedUrlQuery } from 'querystring';
import axios from 'axios';

import { setCookie } from 'nookies';

export function storeUserWithToken(
	ctx: GetServerSidePropsContext<ParsedUrlQuery>,
	jwt: string | null
) {
	if (jwt) {
		setCookie(ctx, 'auth_token', jwt, {
			maxAge: 30 * 24 * 60 * 60, // TODO: Change the maxAge in both here and in the cms
			path: '/',
		});
	}
}

export function getSessionAuthToken(): Promise<string> {
	return axios
		.get('/api/session')
		.then((response) => response.data)
		.then((data) => data.auth_token)
		.catch((err) => {
			console.log(err, 'while fetching user session');
			return null;
		});
}
