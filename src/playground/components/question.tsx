import { useRouter } from 'next/router';
import { useMemo, useCallback, useState, ChangeEvent, FormEvent, useEffect } from 'react';
import useSWR from 'swr';

import md from '@/lib/markdown';
import { hasUserAlreadySubmitted, fetchSingleQuestion, submitAnswer } from '@/playground/lib/api';
import useUser from '@/hooks/useUser';

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
import { Skeleton, Alert, AlertProps } from '@material-ui/lab';

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
//  **disable answer submission if user already submitted*()
//  check if this qid is there in there in `user/me`
//  labels: enhance
//  assignees: aditya-mitra

export default function Q() {
	const classes = useStyles();

	const router = useRouter();

	/**
	 * checksForAllow needs to be 2 for options to enabled
	 */

	const [checksForAllow, setChecksForAllow] = useState(0);

	/**
	 * Snack Display Messages
	 */

	const [snack, setSnack] = useState<ISnack>({
		message: '',
	});
	const showSnack = useCallback(
		(
			message: string,
			severity: AlertProps['severity'],
			duration?: number,
			vertical: VerticalPosType = 'top',
			horizontal: HorizontalPosType = 'right'
		) => {
			if (duration) {
				setTimeout(() => {
					setSnack({ message, severity, vertical, horizontal });
				}, duration);
			} else {
				setSnack({ message, severity, vertical, horizontal });
			}
		},
		[setSnack]
	);

	/**
	 * Fetching of question
	 * Live update of question
	 */

	const qid = useMemo(() => {
		const play = router && router.query.play;

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

	/**
	 * getting the user
	 * knowing if the user has already submitted the question
	 */

	const { user } = useUser();

	useEffect(() => {
		if (user && qid.length > 0) {
			hasUserAlreadySubmitted(parseInt(qid, 10), user.score).then((subm) => {
				if (subm === false) {
					setChecksForAllow((prev) => prev + 1);
				} else {
					setChecksForAllow((prev) => prev + 3);
					showSnack('Buddy, you have already done this question', 'warning');
				}
			});
		}
	}, [user]);

	/**
	 * Showing loading while question is loaded
	 * Display of question in markdown
	 */

	const Question = useMemo(() => {
		if (!error && data) {
			if (data.accepting) setChecksForAllow((prev) => prev + 1);
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

	/**
	 * Selecting an option
	 */

	const [selectedOption, setSelectedOption] = useState<optionTypes>(null);

	const handleOptionChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
		setSelectedOption(event.target.value);
	}, []);

	/**
	 * Submission of answer
	 * Also showing of toast messages
	 */

	const handleAnswerSubmission = useCallback(
		(event: FormEvent<HTMLFormElement>) => {
			event.preventDefault();
			if (selectedOption && qid) {
				submitAnswer(parseInt(qid, 10), parseInt(selectedOption, 10))
					.then(({ correct, message, points, created, updated }) => {
						if (correct) {
							showSnack(message.toUpperCase(), 'success');
						} else {
							showSnack(message.toUpperCase(), 'error');
						}

						if (created) {
							showSnack(
								'We are now storing these points in your account',
								'success',
								4000,
								'top',
								'left'
							);
							showSnack(`Current Points : ${points}`, 'info', 6500, 'top', 'left');
						} else if (updated) {
							showSnack(
								'We have updated the points in your account',
								'info',
								4000,
								'top',
								'left'
							);
							showSnack(`Current Points : ${points}`, 'info', 6500, 'top', 'left');
						}
					})
					.catch((err) => {
						showSnack(err, 'error');
					});
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
						disabled={checksForAllow !== 2}>
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
							disabled={checksForAllow !== 2}
							className={classes.button}>
							Check Answer
						</Button>
					</FormControl>
				</Grid>
			</form>
			<Snackbar
				TransitionComponent={(props) => <Slide {...props} direction="up" />}
				anchorOrigin={{
					vertical: snack.vertical || 'top',
					horizontal: snack.horizontal || 'center',
				}}
				autoHideDuration={4000}
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

type VerticalPosType = 'top' | 'bottom';

type HorizontalPosType = 'center' | 'left' | 'right';
interface ISnack {
	message: string;
	severity?: AlertProps['severity'];
	vertical?: VerticalPosType;
	horizontal?: HorizontalPosType;
}
