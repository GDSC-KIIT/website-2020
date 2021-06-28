import { useState } from 'react';
import useUser from '@/hooks/useUser';
import { staticBackendUrls, internalUrls } from '@/lib/urls';
import { Link, CircularProgress, Typography, Menu, MenuItem, Fade } from '@material-ui/core';
import NextLink from 'next/link';

const CurrentUser = ({ href, text }: IPropsCurrentUser) => (
	<Link underline="none" onClick={() => goToLink(href)}>
		<Typography variant="body2" style={{ cursor: 'pointer' }}>
			{text}
		</Typography>
	</Link>
);

export function GoogleLoginLink() {
	return (
		<Link
			color="inherit"
			underline="none"
			onClick={() => goToLink(staticBackendUrls['login_google'])}>
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
						<NextLink href={internalUrls.profile}>
							<MenuItem onClick={handleClose}>My account</MenuItem>
						</NextLink>
						<NextLink href={internalUrls.logOut}>
							<MenuItem onClick={handleClose}>Sign Out</MenuItem>
						</NextLink>
					</Menu>
				</>
			) : (
				<CurrentUser href={staticBackendUrls['login_google']} text="Sign In" />
			)}
		</div>
	);
}

/**
 * go to a link without showing the history on the back button or the link on hover
 * @param url the url to go
 */
function goToLink(url: string) {
	window.location.replace(url);
}

interface IPropsCurrentUser {
	href: string;
	text: string;
}
