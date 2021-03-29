import useSWR from 'swr';
import type { CSSProperties } from 'react';

import ViewCard from './card';
import DomainsImage from './domainsImage';
import fetchMembersRandomized from '@/lib/dynamicData/members';

import { createStyles, makeStyles, Box } from '@material-ui/core';
import styles from '@/styles/gallery.module.css';

const useStyles = makeStyles((theme) =>
	createStyles({
		root: {
			position: 'relative',
			height: '80vh',
			width: '100vw',
			overflow: 'hidden',
			marginBottom: theme.spacing(5),
		},
		buildingWith: {
			position: 'relative',
			height: '100%',
			width: '100%',
			marginTop: theme.spacing(2),
		},
	})
);

export default function Gallery() {
	const { data: members, error } = useSWR('all_members', fetchMembersRandomized, {
		refreshInterval: 300 * 100,
		compare: (a, b) => a?.length === b?.length,
		revalidateOnFocus: false,
	});
	const classes = useStyles();

	const translateStyles =
		members &&
		({
			'--scrollEnd': `-${members.length * 85}%`,
			'--scrollDuration': `${members.length * 5}s`,
		} as CSSProperties);

	const ViewCards = () => (
		<div className={styles.translateContainer}>
			{!error &&
				Array.isArray(members) &&
				members.map(({ id, image, domain, name }, i) => (
					<Box position="relative" key={id}>
						<div className={styles.translate} style={translateStyles}>
							<ViewCard name={name} domain={domain} image={image} index={i} />
						</div>
					</Box>
				))}
		</div>
	);

	return (
		<Box className={classes.root}>
			<Box className={classes.buildingWith}>
				<DomainsImage />
				<ViewCards />
			</Box>
		</Box>
	);
}
