import type { ReactNode } from 'react';
import Head from 'next/head';

import { createMuiTheme, ThemeProvider } from '@material-ui/core';
import Navbar from '@/components/Navbar';
import Readytotalk from '@/components/ReadyToTalk';
import Footer from '@/components/Footer';
import PaperParticles from '@/components/Particles/Papers';

interface IProps {
	children: ReactNode;
	pageName: string;
}

const theme = createMuiTheme({
	typography: {
		fontFamily: ['Montserrat', 'Roboto'].join(','),
	},
});

export default function Layout({ children, pageName }: IProps) {
	return (
		<>
			<Head key="layout">
				<title>DSC KIIT | {pageName.toUpperCase()}</title>
				<Favicons />
				<link rel="manifest" href="/site.webmanifest" crossOrigin="use-credentials" />
			</Head>
			<ThemeProvider theme={theme}>
				<Navbar />
				{children}
				<Readytotalk />
				<div style={{ position: 'relative' }}>
					<PaperParticles />
					<Footer />
				</div>
			</ThemeProvider>
		</>
	);
}

function Favicons() {
	return (
		<>
			<link rel="apple-touch-icon" sizes="180x180" href="/favicons/apple-touch-icon.png" />
			<link rel="icon" type="image/png" sizes="16x16" href="/favicons/favicon-16x16.png" />
			<link rel="icon" type="image/png" sizes="32x32" href="/favicons/favicon-32x32.png" />
			<link rel="icon" type="image/png" href="/favicons/favicon.png" />
		</>
	);
}
