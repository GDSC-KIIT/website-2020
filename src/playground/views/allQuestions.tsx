import NextLink from 'next/link';
import { useMemo } from 'react';
import useSWR from 'swr';

import { fetchAllQuestions } from '@/playground/lib/api';
import useUser from '@/hooks/useUser';
import { GoogleLoginLink } from '@/components/Navbar/AuthProvider';
import Layout from './layout';

import {
	makeStyles,
	createStyles,
	Theme,
	Grid,
	Typography,
	Button,
	Card,
	CardActions,
	CardContent,
	Container,
	Chip,
} from '@material-ui/core';

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
		heroContent: {
			backgroundColor: theme.palette.background.paper,
			padding: theme.spacing(8, 0, 6),
		},
		heroButtons: {
			marginTop: theme.spacing(4),
		},
		cardGrid: {
			paddingTop: theme.spacing(8),
			paddingBottom: theme.spacing(8),
		},
		card: {
			height: '100%',
			display: 'flex',
			flexDirection: 'column',
		},
		cardMedia: {
			paddingTop: '56.25%',
		},
		cardContent: {
			flexGrow: 1,
		},
	})
);

export default function AllQs() {
	const classes = useStyles();

	const { data } = useSWR('all_questions', fetchAllQuestions, { refreshInterval: 1000 });

	const quesDisplays = useMemo(() => {
		const questions = data ?? [];
		if (questions.length > 0) {
			return questions.map((question) => (
				<Grid
					item
					key={question.id}
					xs={12}
					sm={6}
					md={4}
					data-testid={`question-${question.id}`}>
					<Card className={classes.card}>
						<center>
							<CardContent className={classes.cardContent}>
								<Typography variant="h5" component="h2">
									{question.qname}
								</Typography>
							</CardContent>
						</center>
						<CardActions>
							<NextLink href={`/playground/${question.id}`}>
								<Button
									size="small"
									variant={question.accepting ? 'outlined' : 'contained'}
									color="primary"
									style={{ textDecoration: 'none' }}>
									{question.accepting ? 'Solve' : 'View'}
								</Button>
							</NextLink>

							{question.accepting ? (
								<Chip
									color="secondary"
									label="LIVE"
									size="small"
									style={{ marginLeft: 'auto' }}
								/>
							) : null}
						</CardActions>
					</Card>
				</Grid>
			));
		}

		return null;
	}, [data]);

	return (
		<Layout>
			<>
				<div className={classes.heroContent}>
					<Container maxWidth="sm">
						<Typography
							component="h1"
							variant="h2"
							align="center"
							color="textPrimary"
							gutterBottom>
							DSC KIIT
							<br />
							<strong>PlayGround ⚡🏆</strong>
						</Typography>
						<Typography variant="h5" align="center" color="textSecondary" paragraph>
							{data && data.length > 0
								? 'You can view or solve some questions'
								: 'Currently no questions!'}
						</Typography>
						<div className={classes.heroButtons}>
							<Grid container spacing={2} justify="center">
								<LoginButton />
							</Grid>
						</div>
					</Container>
				</div>
				<Container className={classes.cardGrid} maxWidth="md">
					<Grid container spacing={4}>
						{quesDisplays}
					</Grid>
				</Container>
			</>
		</Layout>
	);
}

function LoginButton() {
	const { loading, user } = useUser();

	if (!loading && !user)
		return (
			<Button variant="contained" color="primary" data-testid="not-loggedin">
				<GoogleLoginLink />
			</Button>
		);
	return null;
}
