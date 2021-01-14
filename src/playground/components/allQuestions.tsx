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
} from '@material-ui/core';
import '@fontsource/montserrat';

import { fetchAllQuestions } from '@/playground/lib/api';

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
			//  Paper needs to be disabled when accepting===false
			//  labels: priority, styling
			//  assignees: yashvi2001
			return questions.map((question) => (
				<Grid item xs={10} key={question.id}>
					<Paper
						className={classes.paper}
						elevation={3}
						style={{ backgroundColor: question.accepting ? 'green' : 'orangered' }}>
						<Typography variant="h5">{question.id}</Typography>
					</Paper>
				</Grid>
			));
		} else {
			return <CircularProgress size={70} />;
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
