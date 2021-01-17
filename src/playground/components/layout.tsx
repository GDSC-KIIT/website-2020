import type { ReactNode } from 'react';

import NextLink from 'next/link';
import Head from 'next/head';

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
			<Head key="Playground">
				<title>PlayGround ⚡</title>
			</Head>
			<CssBaseline />
			<AppBar position="relative">
				<NextLink href="/playground">
					<Toolbar style={{ cursor: 'pointer' }}>
						<Typography variant="h6" color="inherit" noWrap>
							DSC KIIT <strong>PlayGround</strong>
						</Typography>
					</Toolbar>
				</NextLink>
			</AppBar>
			<main>{children}</main>
			<footer className={classes.footer}>
				<NextLink href="/playground">
					<Typography
						variant="h5"
						align="left"
						gutterBottom
						style={{ cursor: 'pointer' }}>
						DSC KIIT <strong>PlayGround ⚡</strong>
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
