import { useEffect, useState } from 'react';
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import { Box, Typography, Grid } from '@material-ui/core';

import type { SearchResultType } from '@/types/index';
import { getSearchResults, cancelOnUnMount } from '@/lib/dynamicData/search';

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

		dropdown: {
			position: 'absolute',
			marginTop: theme.spacing(1),
			left: theme.spacing(-1),
		},
	})
);

export function Results({ searchText }: IResultProps) {
	const classes = useStyles();
	const [results, setResults] = useState<SearchResultType[]>([]);

	const boxDisplay = searchText.length > 0 ? 'block' : 'none';

	useEffect(() => {
		return () => cancelOnUnMount();
	}, []);

	useEffect(() => {
		getSearchResults(searchText).then((data) => setResults(data));
	}, [searchText]);

	return (
		<Box className={classes.dropdown} style={{ display: boxDisplay }}>
			<Grid
				container
				direction="column"
				justify="flex-start"
				alignItems="flex-start"
				spacing={1}>
				<ResultItems results={results} />
			</Grid>
		</Box>
	);
}

function ResultItems({ results }: IResultItemProps) {
	const classes = useStyles();
	return (
		<>
			{results.map((r) => (
				<Grid item key={r.refIndex}>
					<Box className={classes.resultBox}>
						<Typography className={classes.heading}>{r.item.name}</Typography>
						<div className={classes.text}>{r.item.text}</div>
					</Box>
				</Grid>
			))}
		</>
	);
}

interface IResultProps {
	searchText: string;
}

interface IResultItemProps {
	results: SearchResultType[];
}
