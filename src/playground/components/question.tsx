import { useRouter } from 'next/router';
import { useMemo, useCallback, useState, ChangeEvent, FormEvent } from 'react';
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
	Snackbar,
	Slide,
} from '@material-ui/core';

import { Alert, AlertProps, Skeleton } from '@material-ui/lab';

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

function createOption(option: string | null | undefined, value: optionTypes) {
	if (!option) return null;
	return (
		<FormControlLabel
			value={value && value.toString()}
			control={<Radio />}
			label={option}
			key={value}
		/>
	);
}

// TODO there is no feedback to see when the question is not accpeting responses
//  labels: enhance
//  assignees: aditya-mitra

export default function Q() {
	const classes = useStyles();

	const router = useRouter();

	const [snack, setSnack] = useState<ISnack>({
		message: '',
		severity: 'info',
	});

	const [selectedOption, setSelectedOption] = useState<optionTypes>(null);

	const [allowed, setAllowed] = useState(false);

	const qid = useMemo(() => {
		const { play } = router.query;

		if (!play) {
			return '';
		} else if (typeof play === 'string') {
			return play;
		} else if (Array.isArray(play)) {
			return play[0];
		}
		return '';
	}, [router]);

	const fetcher = useCallback(() => {
		if (typeof qid === 'string') {
			return fetchSingleQuestion(parseInt(qid, 10));
		}
		return null;
	}, [qid]);

	const { data, error } = useSWR(`single-question-${qid}`, fetcher, { refreshInterval: 1000 });

	const Question = useMemo(() => {
		if (!error && data) {
			if (data.accepting) setAllowed(true);
			return <div dangerouslySetInnerHTML={{ __html: md(data.question) }} />;
		} else if (error) {
			setSnack({ message: 'this is from snack', severity: 'error' });
			return <Skeleton variant="rect" width={700} height={200} />;
		}
		// TODO Question and Options are blank during initial fetch
		//  During inital data fetch, the question and the answers behind the backdrop are empty
		//  They can be made to look nicer with a better loading screen
		//  Please also make the *skeleton* mobile responsive (it can be found above)
		//  labels: styling, responsive
		//  assignees: yashvi2001
		return (
			<Backdrop className={classes.backdrop} open={true}>
				<CircularProgress size={100} data-testid="loader" />;
			</Backdrop>
		);
	}, [data, error]);

	const handleOptionChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
		setSelectedOption(event.target.value);
	}, []);

	const handleAnswerSubmission = useCallback(
		(event: FormEvent<HTMLFormElement>) => {
			event.preventDefault();
			if (selectedOption) {
				setAllowed(false);
				console.log('you had selected ' + selectedOption);
			}
		},
		[selectedOption]
	);

	const Options = useMemo(() => {
		return [
			createOption(data?.option_1, '1'),
			createOption(data?.option_2, '2'),
			createOption(data?.option_3, '3'),
			createOption(data?.option_4, '4'),
			createOption(data?.option_5, '5'),
			createOption(data?.option_6, '6'),
		];
	}, [data]);

	return (
		<div>
			<form onSubmit={handleAnswerSubmission}>
				<Grid container spacing={0} justify="center">
					<Grid item xs={12}>
						<Paper className={classes.paper1}>
							<FormLabel>{Question}</FormLabel>
						</Paper>
					</Grid>
					<FormControl
						component="fieldset"
						className={classes.formControl}
						disabled={!allowed}>
						<RadioGroup
							aria-label="quiz"
							value={selectedOption}
							name={`quiz-${qid}`}
							onChange={handleOptionChange}>
							{Options}
						</RadioGroup>
						<Button
							type="submit"
							variant="outlined"
							color="primary"
							disabled={!allowed}
							className={classes.button}>
							Check Answer
						</Button>
					</FormControl>
				</Grid>
			</form>
			<Snackbar
				TransitionComponent={(props) => <Slide {...props} direction="up" />}
				anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
				autoHideDuration={2000}
				disableWindowBlurListener={true}
				onClose={() => setSnack({ message: '' })}
				open={snack.message.length > 0}>
				<Alert
					elevation={6}
					variant="standard"
					onClose={() => setSnack({ message: '' })}
					severity={snack.severity}>
					{snack.message}
				</Alert>
			</Snackbar>
		</div>
	);
}

type optionTypes = '1' | '2' | '3' | '4' | '5' | '6' | string | null;

interface ISnack {
	message: string;
	severity?: AlertProps['severity'];
}
