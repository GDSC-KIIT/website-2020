import useSWR from 'swr';

import ViewCard from './card';
import DomainsImage from './domainsImage';
import fetchAllMembers from '@/lib/dynamicData/members';

import { createStyles, makeStyles, Box, Typography } from '@material-ui/core';
import styles from '@/styles/gallery.module.css';

const useStyles = makeStyles((theme) =>
	createStyles({
		root: {
			position: 'relative',
			height: '100vh',
			width: '100vw',
			overflow: 'hidden',
		},
		heading: {
			textAlign: 'center',
			marginTop: theme.spacing(1),
		},
		buildingWith: {
			position: 'relative',
			height: '100%',
			width: '100%',
		},
	})
);

export default function Gallery() {
	const { data: members, error } = useSWR('all_members', fetchAllMembers, {
		refreshInterval: 300 * 100,
	});
	const classes = useStyles();

	const ViewCards = () => (
		<div className={styles.translateContainer}>
			{!error &&
				Array.isArray(members) &&
				members.map(({ id, image, domain, name }, i) => (
					<Box position="relative" key={id}>
						<div className={styles.translate}>
							<ViewCard name={name} domain={domain} image={image} index={i} />
						</div>
						<Box position="absolute" top="100%" left="0" right="0">
							<div className={styles.translate}>
								<ViewCard name={name} domain={domain} image={image} index={i} />
							</div>
						</Box>
					</Box>
				))}
		</div>
	);

	return (
		<Box className={classes.root}>
			<Typography component="h2" variant="h3" className={classes.heading}>
				What we do
			</Typography>
			<Box className={classes.buildingWith}>
				<DomainsImage />
				<ViewCards />
			</Box>
		</Box>
	);
}
