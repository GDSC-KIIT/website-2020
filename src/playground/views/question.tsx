import NextLink from 'next/link';
import { useRouter } from 'next/router';
import { useMemo, useCallback, useState, ChangeEvent, FormEvent, useEffect } from 'react';
import useSWR from 'swr';

import md from '@/lib/markdown';
import { hasUserAlreadySubmitted, fetchSingleQuestion, submitAnswer } from '@/playground/lib/api';
import useUser from '@/hooks/useUser';
import Layout from './layout';
import { ToastInjector, showToast } from '@/playground/components/toast';

import {
	makeStyles,
	Typography,
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
		padding: theme.spacing(3),
		textAlign: 'left',
		color: theme.palette.text.primary,
		marginTop: 100,
	},
	paper: {
		padding: theme.spacing(2),
		textAlign: 'left',
		color: theme.palette.text.primary,
		marginTop: 120,
	},
	formControl: {
		margin: theme.spacing(0),
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
			data-testid="question-options"
		/>
	);
}

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
		if (user && user.score && qid !== '') {
			hasUserAlreadySubmitted(parseInt(qid, 10), user.score).then((subm) => {
				if (subm === false) {
					setChecksForAllow((prev) => prev + 1);
				} else if (subm === true) {
					setChecksForAllow((prev) => prev + 3);
					showSnack('Buddy, you have already done this question', 'warning');
				}
			});
		} else if (user && user.score === null) {
			setChecksForAllow((prev) => prev + 1);
		}
	}, [user]);

	/**
	 * Showing loading while question is loaded
	 * Display of question in markdown
	 */

	const Question = useMemo(() => {
		if (!error && data) {
			if (data.accepting) setChecksForAllow((prev) => prev + 1);
			return (
				<>
					<h5>{data.qname}</h5>
					<div dangerouslySetInnerHTML={{ __html: md(data.question) }} />
				</>
			);
		} else if (error) {
			showSnack(error.message || 'An unknown error occurred', 'error');
			return <Skeleton variant="rect" width={700} height={200} />;
		}
		return (
			<Backdrop className={classes.backdrop} open={true}>
				<CircularProgress size={100} data-testid="loader" />
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
				setChecksForAllow((prev) => prev + 3);

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
					.catch((err: Error) => {
						showSnack(err.message, 'error');
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
		<Layout qname={data?.qname.toUpperCase()}>
			<form onSubmit={handleAnswerSubmission}>
				<Grid container spacing={0} justify="center">
					<Grid item xs={12} sm={8} md={9}>
						<Paper className={classes.paper1}>
							<NextLink href="/playground">
								<Typography
									variant="h6"
									style={{ cursor: 'pointer', marginLeft: '.4em' }}
									noWrap>
									<img src="/images/playground/dsc.svg" alt="DSC KIIT LOGO" />
									DSC QUIZ
								</Typography>
							</NextLink>
							<hr />
							<Typography variant="h6">{Question}</Typography>
							<FormLabel />
							<FormControl
								component="fieldset"
								className={classes.formControl}
								disabled={checksForAllow !== 2}
								data-testid="form-options">
								<RadioGroup
									aria-label="quiz"
									value={selectedOption}
									name={`quiz-${qid}`}
									onChange={handleOptionChange}>
									{Options}
								</RadioGroup>
								<Grid container spacing={0} justify="center">
									<Button
										type="submit"
										variant="contained"
										color="primary"
										disabled={checksForAllow !== 2}
										className={classes.button}
										data-testid="answer-submit-button">
										Check Answer
									</Button>
								</Grid>
							</FormControl>
						</Paper>
					</Grid>
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
			<span style={{ display: 'none' }} data-testid="snack-message">
				{snack.message}
			</span>
			<Button onClick={() => showToast({ text: 'show standard toast', type: 'error' })}>
				Activate Toast
			</Button>
			<ToastInjector />
		</Layout>
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
