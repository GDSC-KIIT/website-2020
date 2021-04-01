import MembersUnderDomain from './MembersUnderDomain';
import { getReadableNameFromDomain } from '@/lib/text';
import type { GroupedMemberType } from '@/types/index';

import { Box, Grid, makeStyles, createStyles, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) =>
	createStyles({
		root: {
			display: 'flex',
			flexDirection: 'column',
			justifyContent: 'center',
			alignItems: 'center',
			width: '100vw',
		},
		heading: {
			textAlign: 'center',
			display: 'block',
			marginTop: theme.spacing(5),
			marginBottom: theme.spacing(5),
		},
	})
);

export default function Members({ members }: IMembers) {
	const classes = useStyles();
	const domains = Object.keys(members);

	return (
		<Box className={classes.root}>
			{domains.map((domain) => (
				<div key={domain}>
					<Typography className={classes.heading} variant="h2" component="h2">
						{getReadableNameFromDomain(domain)}
					</Typography>
					<Grid
						container
						spacing={10}
						direction="row"
						justify="center"
						alignItems="center">
						{MembersUnderDomain(members[domain])}
					</Grid>
				</div>
			))}
		</Box>
	);
}

export interface IMembers {
	members: GroupedMemberType;
}
