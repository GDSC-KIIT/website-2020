import type { ReactNode } from 'react';
import Head from 'next/head';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

interface IProps {
	children: ReactNode;
	pageName: string;
}

export default function Layout({ children, pageName }: IProps) {
	return (
		<>
			<Head key="layout">
				<title>DSC KIIT | {pageName.toUpperCase()}</title>
			</Head>
			<Navbar />
			{children}
			<Footer />
		</>
	);
}
