import { ReactNode } from 'react';
import styles from './searchable.module.css';

export default function Searchable({ children, name }: ISearchableProps) {
	// TODO: add some scroll height padding on the top to compensate for the navbar
	//  labels: styling
	return (
		<>
			<div data-search={name} className={styles.noStyle}>
				<span data-search-span id={encodeURI(name)} className={styles.searchable} />
				{children}
			</div>
		</>
	);
}

interface ISearchableProps {
	children: ReactNode;
	name: string;
}
