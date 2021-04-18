import { useEffect, useState } from 'react';
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import { Box, Grid } from '@material-ui/core';

import type { SearchResultType } from '@/types/index';
import { getSearchResults, cancelOnUnMount } from '@/lib/dynamicData/search';
import ResultItems from './ResultItems';

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		dropdown: {
			position: 'absolute',
			marginTop: theme.spacing(1),
			left: theme.spacing(-1),
		},
	})
);

export default function ResultsContainer({ searchText }: IResultProps) {
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

interface IResultProps {
	searchText: string;
}
