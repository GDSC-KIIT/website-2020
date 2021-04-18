import NextLink from 'next/link';
import { Box, Typography, Grid, Theme, createStyles, makeStyles } from '@material-ui/core';

import type { SearchResultType } from '@/types/index';

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		resultBox: {
			boxShadow: theme.shadows[1],
			borderRadius: theme.shape.borderRadius,
			backgroundColor: theme.palette.background.paper,
			padding: theme.spacing(0.5),
			width: theme.spacing(40),
			maxHeight: theme.spacing(18),
			'&:hover': {
				backgroundColor: theme.palette.grey[200],
			},
			'&:focus': {
				backgroundColor: theme.palette.action.selected,
			},
		},
		heading: {
			...theme.typography.subtitle1,
			color: theme.palette.text.primary,
			paddingLeft: theme.spacing(0.75),
			fontWeight: theme.typography.fontWeightBold,
			lineHeight: theme.spacing(0.15),
		},
		text: {
			...theme.typography.subtitle2,
			color: theme.palette.text.secondary,
			paddingLeft: theme.spacing(1),
			textOverflow: 'ellipsis',
			overflow: 'hidden',
			maxHeight: theme.spacing(11),
		},
	})
);

export default function ResultItems({ results }: IResultItemProps) {
	const classes = useStyles();
	return (
		<>
			{results.map((r) => (
				<NextLink
					href={r.item.pageName + '#' + r.item.locId}
					prefetch={false}
					scroll={false}>
					<Grid item key={r.refIndex}>
						<Box className={classes.resultBox}>
							<Typography className={classes.heading}>{r.item.name}</Typography>
							<div className={classes.text}>{r.item.text}</div>
						</Box>
					</Grid>
				</NextLink>
			))}
		</>
	);
}

interface IResultItemProps {
	results: SearchResultType[];
}
