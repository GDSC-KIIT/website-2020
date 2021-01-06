import type { GetServerSidePropsContext } from 'next';
import type { ParsedUrlQuery } from 'querystring';
import { setCookie } from 'nookies';

export default function (ctx: GetServerSidePropsContext<ParsedUrlQuery>) {
	setCookie(ctx, 'auth_token', '', {
		maxAge: 1,
		path: '/',
	});
}
