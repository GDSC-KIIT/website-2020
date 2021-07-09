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

const useKeyPress = function (targetKey: string) {
	const [keyPressed, setKeyPressed] = useState(false);

	function downHandler({ key }: { key: string }) {
		if (key === targetKey) {
			setKeyPressed(true);
		}
	}

	const upHandler = ({ key }: { key: string }) => {
		if (key === targetKey) {
			setKeyPressed(false);
		}
	};

	useEffect(() => {
		window.addEventListener('keydown', downHandler);
		window.addEventListener('keyup', upHandler);

		return () => {
			window.removeEventListener('keydown', downHandler);
			window.removeEventListener('keyup', upHandler);
		};
	});

	return keyPressed;
};

export default function ResultsContainer({ searchText }: IResultProps) {
	const classes = useStyles();
	const [results, setResults] = useState<SearchResultType[]>([]);
	const downPress = useKeyPress('ArrowDown');
	const upPress = useKeyPress('ArrowUp');
	const enterPress = useKeyPress('Enter');
	const [cursor, setCursor] = useState(0);

	const boxDisplay = searchText.length > 0 ? 'block' : 'none';

	useEffect(() => {
		return () => cancelOnUnMount();
	}, []);

	useEffect(() => {
		getSearchResults(searchText).then((data) => setResults(data));
	}, [searchText]);

	useEffect(() => {
		if (results.length && downPress) {
			setCursor((prevState) => (prevState < results.length - 1 ? prevState + 1 : prevState));
		}
	}, [downPress]);

	useEffect(() => {
		if (results.length && upPress) {
			setCursor((prevState) => (prevState > 0 ? prevState - 1 : prevState));
		}
	}, [upPress]);

	useEffect(() => {
		if (results.length && enterPress) {
			window.location.href = `${results[cursor].item.pageName}#${results[cursor].item.locId}`;
		}
	}, [cursor, enterPress]);

	return (
		<Box className={classes.dropdown} style={{ display: boxDisplay }}>
			<Grid
				container
				direction="column"
				justify="flex-start"
				alignItems="flex-start"
				spacing={1}>
				<ResultItems results={results} cursor={cursor} />
			</Grid>
		</Box>
	);
}

interface IResultProps {
	searchText: string;
}
