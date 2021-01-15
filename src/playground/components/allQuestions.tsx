import NextLink from 'next/link';
import { useMemo } from 'react';
import useSWR from 'swr';

import {
	makeStyles,
	createStyles,
	Theme,
	Paper,
	Grid,
	Typography,
	CircularProgress,
	Backdrop,
	Button,
} from '@material-ui/core';

import { fetchAllQuestions } from '@/playground/lib/api';
import { GoogleAuthLogin } from '@/components/AuthProvider';

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		root: {
			flexGrow: 1,
			marginTop: 120,
		},
		paper: {
			padding: theme.spacing(5),
			textAlign: 'center',

			color: theme.palette.text.primary,
		},
		typography: {
			fontFamily: 'montserreat',
			fontSize: 12,
		},
		backdrop: {
			zIndex: theme.zIndex.drawer + 1,
			color: '#fff',
		},
	})
);

export default function AllQs() {
	const classes = useStyles();

	const { data, error } = useSWR('all_questions', fetchAllQuestions, { refreshInterval: 1000 });

	const quesDisplays = useMemo(() => {
		const questions = data ?? [];
		if (questions.length > 0) {
			// TODO add a ripple effect to the paper design
			//  Also change the colour of the paper whether both accepting or not
			//  `<Paper/>` needs to be disabled when `accepting===false`
			//  Showing only the question number in the paper does not seem *stylish*
			//  Some **annotations** would do fine if added
			// Since a **Link** to a particular question is added, the `pointer` needs to appear as a `cursor` when hovered over the link
			//  labels: priority, styling
			//  assignees: yashvi2001, aditya-mitra
			return questions.map((question) => (
				<Grid item xs={10} key={question.id}>
					<NextLink href={question.accepting ? `/playground/${question.id}` : '#'}>
						<Paper
							data-testid={`question-${question.id}`}
							className={classes.paper}
							elevation={3}
							style={{ backgroundColor: question.accepting ? 'green' : 'orangered' }}>
							<Typography variant="h5">THE QUESTION IS {question.id}</Typography>
						</Paper>
					</NextLink>
				</Grid>
			));
		} else if (error) {
			// TODO style the not logged in error message
			//  style this as a heading and an **error** message
			//  Also style the `<Button/>` component
			//  labels: priority, styling
			//  assignees: yashvi2001
			return (
				<div data-testid="not-loggedin">
					You are not logged in!
					<Button>
						<GoogleAuthLogin />
					</Button>
				</div>
			);
		} else {
			return (
				<Backdrop className={classes.backdrop} open={true}>
					<CircularProgress size={70} data-testid="loader" />;
				</Backdrop>
			);
		}
	}, [data, error]);

	return (
		<div className={classes.root}>
			<Grid container spacing={4} justify="center">
				{quesDisplays}
			</Grid>
		</div>
	);
}
