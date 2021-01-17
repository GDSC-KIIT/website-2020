import useUser from '@/hooks/useUser';
import { backendUrls } from '@/lib/backendUrls';

import { Link, CircularProgress, Typography, Button } from '@material-ui/core';
import NextLink from 'next/link';

interface IPropsCurrentUser {
	href: string;
	text: string;
}

const CurrentUser = ({ href, text }: IPropsCurrentUser) => (
	<Link href={href}>
		<Typography variant="body2" style={{ cursor: 'pointer' }}>
			{text}
		</Typography>
	</Link>
);

export function GoogleAuthLogin() {
	const { loading, user } = useUser();

	// TODO style this in a dropdown menu
	//  labels: styling
	//  button not necessary
	return (
		<div>
			{loading ? (
				<CircularProgress />
			) : user ? (
				<>
					<CurrentUser href="" text={`Hi, ${user.username}`} />
					<NextLink href="/auth/logout">
						<Button>log out</Button>
					</NextLink>
				</>
			) : (
				<CurrentUser href={backendUrls['login_google']} text="Sign In" />
			)}
		</div>
	);
}
