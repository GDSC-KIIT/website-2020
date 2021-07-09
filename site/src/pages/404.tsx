import NextLink from 'next/link';
import styles from '../styles/page-not-found.module.css';

export default function PageNotFound() {
	return (
		<div className={styles.notfoundMain}>
			<div className={styles.notfound}>
				<div className={styles.notfound404}>
					<h1>404</h1>
				</div>
				<h2>we are sorry, page not found!</h2>
				<p>
					The page you are looking for might have been removed or had its name chaged or
					is temporarily unavilable.
				</p>
				<NextLink href="/">Back to Homepage</NextLink>
			</div>
		</div>
	);
}
