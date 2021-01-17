import type { ReactNode } from 'react';

import NextLink from 'next/link';

import { AppBar, CssBaseline, Toolbar, Typography, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
	footer: {
		backgroundColor: theme.palette.background.paper,
		padding: theme.spacing(6),
	},
}));

export default function Layout({ children }: { children: ReactNode }) {
	const classes = useStyles();

	return (
		<>
			<CssBaseline />
			<AppBar position="relative">
				<Toolbar>
					<Typography variant="h6" color="inherit" noWrap>
						DSC KIIT <strong>PlayGround</strong>
					</Typography>
				</Toolbar>
			</AppBar>
			<main>{children}</main>
			<footer className={classes.footer}>
				<NextLink href="/playground">
					<Typography align="left" gutterBottom style={{ cursor: 'pointer' }}>
						DSC KIIT <strong>PlayGround</strong>
					</Typography>
				</NextLink>
				<Typography align="right" gutterBottom>
					Maintained By <strong>Yashvi Mahapatra</strong> and{' '}
					<strong>Aditya Mitra</strong>
				</Typography>
			</footer>
		</>
	);
}
