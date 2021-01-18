import { useState } from 'react';
import useUser from '@/hooks/useUser';
import { backendUrls } from '@/lib/backendUrls';
import { Link, CircularProgress, Typography, Menu, MenuItem, Fade } from '@material-ui/core';
import NextLink from 'next/link';

interface IPropsCurrentUser {
	href: string;
	text: string;
}

const CurrentUser = ({ href, text }: IPropsCurrentUser) => (
	<Link underline="none" href={href}>
		<Typography variant="body2" style={{ cursor: 'pointer' }}>
			{text}
		</Typography>
	</Link>
);

export function GoogleLoginLink() {
	return (
		<Link href={backendUrls['login_google']} color="inherit" underline="none">
			Sign In with Google
		</Link>
	);
}

export function GoogleAuthLogin() {
	const { loading, user } = useUser();
	const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
	const open = Boolean(anchorEl);

	const handleClick = (event: React.MouseEvent<HTMLElement>) => {
		setAnchorEl(event.currentTarget);
	};

	const handleClose = () => {
		setAnchorEl(null);
	};
	return (
		<div>
			{loading ? (
				<CircularProgress />
			) : user ? (
				<>
					<Typography variant="body2" style={{ cursor: 'pointer' }} onClick={handleClick}>
						Hi, {user.username}
					</Typography>

					<Menu
						id="fade-menu"
						anchorEl={anchorEl}
						keepMounted
						open={open}
						onClose={handleClose}
						TransitionComponent={Fade}>
						<MenuItem onClick={handleClose}>My account</MenuItem>
						<NextLink href="/auth/logout">
							<MenuItem onClick={handleClose}>Sign Out</MenuItem>
						</NextLink>
					</Menu>
				</>
			) : (
				<CurrentUser href={backendUrls['login_google']} text="Sign In" />
			)}
		</div>
	);
}
