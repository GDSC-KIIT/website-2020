import NextLink from 'next/link';
import { useMemo } from 'react';
import useSWR from 'swr';

import { fetchAllQuestions } from '@/playground/lib/api';
import useUser from '@/hooks/useUser';
import { GoogleLoginLink } from '@/components/AuthProvider';
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
	CardMedia,
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
			// TODO add a ripple effect to the paper design
			//  Also change the colour of the paper whether both accepting or not
			//  `<Paper/>` needs to be disabled when `accepting===false`
			//  Showing only the question number in the paper does not seem *stylish*
			//  Some **annotations** would do fine if added
			// Since a **Link** to a particular question is added, the `pointer` needs to appear as a `cursor` when hovered over the link
			//  labels: priority, styling
			//  assignees: yashvi2001, aditya-mitra
			return questions.map((question) => (
				<Grid
					item
					key={question.id}
					xs={12}
					sm={6}
					md={4}
					data-testid={`question-${question.id}`}>
					<Card className={classes.card}>
						<NextLink href={`/playground/${question.id}`}>
							<CardMedia
								style={{ cursor: 'pointer' }}
								className={classes.cardMedia}
								// TODO
								//  labels: styling, priority
								//  Need **some random images** in the `assets` folder
								image="https://source.unsplash.com/random"
								title={'Solve ' + question.id}
							/>
						</NextLink>
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
							<strong>PlayGround ⚡</strong>
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
