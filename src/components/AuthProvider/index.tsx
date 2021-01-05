import useUser from '@/hooks/useUser';

import { Link, CircularProgress, Typography } from '@material-ui/core';

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

	return (
		<div>
			{loading ? (
				<CircularProgress />
			) : user ? (
				<CurrentUser href="" text={`Hi, ${user.username}`} />
			) : (
				<CurrentUser href="http://localhost:9000/connect/google" text="Sign In" />
			)}
		</div>
	);
}
