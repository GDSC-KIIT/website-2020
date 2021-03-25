import type { ReactNode } from 'react';

import NextLink from 'next/link';
import Head from 'next/head';

import {
	AppBar,
	CssBaseline,
	Toolbar,
	Typography,
	makeStyles,
	createMuiTheme,
	ThemeProvider,
} from '@material-ui/core';
import 'highlight.js/styles/github.css';

const useStyles = makeStyles((theme) => ({
	footer: {
		backgroundColor: theme.palette.background.paper,
		padding: theme.spacing(6),
	},
}));

const theme = createMuiTheme({
	typography: {
		fontFamily: ['Quicksand', 'Roboto'].join(','),
	},
});

export default function Layout({ qname, children }: { qname?: string; children: ReactNode }) {
	const classes = useStyles();
	const pn = qname && '| Quiz - ' + qname;

	return (
		<>
			<Head key="Playground">
				<title>PlayGround ⚡🏆 {pn}</title>
				<link
					rel="stylesheet"
					href="https://highlightjs.org/static/demo/styles/railscasts.css"
				/>
			</Head>
			<CssBaseline />
			<ThemeProvider theme={theme}>
				<AppBar position="relative">
					<NextLink href="/">
						<Toolbar style={{ cursor: 'pointer' }}>
							<Typography variant="h6" color="inherit" noWrap>
								DSC KIIT
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
							DSC KIIT <strong>PlayGround ⚡🏆</strong>
						</Typography>
					</NextLink>
					<Typography align="right" gutterBottom>
						Maintained By <strong>Yashvi Mahapatra</strong> and{' '}
						<strong>Aditya Mitra</strong>
					</Typography>
				</footer>
			</ThemeProvider>
		</>
	);
}
