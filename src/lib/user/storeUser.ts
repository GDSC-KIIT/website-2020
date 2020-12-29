import type { GetServerSidePropsContext } from 'next';
import type { ParsedUrlQuery } from 'querystring';

import { setCookie } from 'nookies';

export function storeUserWithToken(
	ctx: GetServerSidePropsContext<ParsedUrlQuery>,
	jwt: string | null
) {
	if (jwt) {
		setCookie(ctx, 'auth_token', jwt, {
			maxAge: 30 * 24 * 60 * 60,
			path: '/',
		});
	}
}
