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
