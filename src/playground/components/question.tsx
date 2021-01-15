import { useRouter } from 'next/router';
import { useMemo, useCallback } from 'react';
import useSWR from 'swr';

import md from '@/lib/markdown';
import { fetchSingleQuestion } from '@/playground/lib/api';

import {
	makeStyles,
	Radio,
	RadioGroup,
	FormControlLabel,
	FormControl,
	FormLabel,
	Button,
	Grid,
	Paper,
	Backdrop,
	CircularProgress,
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
	paper1: {
		padding: theme.spacing(10),
		textAlign: 'center',
		color: theme.palette.text.secondary,
	},
	paper: {
		padding: theme.spacing(3),
		textAlign: 'center',
		color: theme.palette.text.secondary,
	},
	formControl: {
		margin: theme.spacing(3),
		padding: theme.spacing(10),
	},
	button: {
		margin: theme.spacing(1, 1, 0, 0),
	},
	backdrop: {
		zIndex: theme.zIndex.drawer + 1,
		color: '#fff',
	},
}));

function createOption(option: string | null | undefined, value: number) {
	console.log(option, 'is the option');
	if (!option) return null;
	return <FormControlLabel value={value} control={<Radio />} label={option} key={value} />;
}

export default function Q() {
	const classes = useStyles();

	const router = useRouter();

	const play = useMemo(() => {
		const rq = router.query.play;
		if (!rq) {
			return '';
		} else if (typeof rq === 'string') {
			return rq;
		} else if (Array.isArray(rq)) {
			return rq[0];
		}
		return '';
	}, [router]);

	const fetcher = useCallback(() => {
		if (typeof play === 'string') {
			return fetchSingleQuestion(parseInt(play, 10));
		}
		return null;
	}, [play]);

	const { data, error } = useSWR(`single-question-${play}`, fetcher, { refreshInterval: 1000 });

	const Question = useMemo(() => {
		if (!error && data) {
			return <div dangerouslySetInnerHTML={{ __html: md(data.question) }} />;
		} else if (error) {
			// TODO create toast if there is an error
			return null;
		}
		return (
			// TODO Question and Options are blank during initial fetch
			//  During inital data fetch, the question and the answers behind the backdrop are empty
			//  They can be made to look nicer with a better loading screen
			//  labels: styling
			//  assignees: yashvi2001
			<Backdrop className={classes.backdrop} open={true}>
				<CircularProgress size={70} data-testid="loader" />;
			</Backdrop>
		);
	}, [data, error]);

	const Options = useMemo(() => {
		return [
			createOption(data?.option_1, 1),
			createOption(data?.option_2, 2),
			createOption(data?.option_3, 3),
			createOption(data?.option_4, 4),
			createOption(data?.option_5, 5),
			createOption(data?.option_6, 6),
		];
	}, [data]);

	console.info(Options);
	return (
		<form>
			<Grid container spacing={0} justify="center">
				<FormControl component="fieldset" className={classes.formControl}>
					<Grid item xs={12}>
						<Paper className={classes.paper1}>
							<FormLabel>{Question}</FormLabel>
						</Paper>
					</Grid>
					<RadioGroup aria-label="quiz" name="quiz">
						{Options}
					</RadioGroup>

					<Button
						type="submit"
						variant="outlined"
						color="primary"
						className={classes.button}>
						Check Answer
					</Button>
				</FormControl>
			</Grid>
		</form>
	);
}
