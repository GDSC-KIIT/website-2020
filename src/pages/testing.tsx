import styles from '@/styles/animating.module.css';
import {
	createStyles,
	makeStyles,
	Box,
	Card,
	CardContent,
	CardMedia,
	Typography,
	Container,
	Grid,
} from '@material-ui/core';

const useStyles1 = makeStyles((theme) =>
	createStyles({
		root: {
			position: 'relative',
			height: '100vh',
			width: '100vw',
			overflow: 'hidden',
		},
		heading: {
			textAlign: 'center',
			marginTop: theme.spacing(1),
		},
		buildingWith: {
			position: 'relative',
			height: '100%',
			width: '100%',
		},
	})
);

export default function Testing() {
	const classes = useStyles1();
	return (
		<Box className={classes.root}>
			<Typography component="h2" variant="h3" className={classes.heading}>
				What we do
			</Typography>
			<Box className={classes.buildingWith}>
				<Cta />
				<div className={styles.translateContainer}>
					<Box position="relative">
						<div className={styles.translate}>
							<MediaControlCard />
						</div>
						<Box position="absolute" top="100%" left="0" right="0">
							<div className={styles.translate}>
								<MediaControlCard />
							</div>
						</Box>
					</Box>
				</div>
			</Box>
		</Box>
	);
}

const useStyles3 = makeStyles((theme) =>
	createStyles({
		root: {
			marginTop: theme.spacing(10),
			marginBottom: 0,
			display: 'flex',
			position: 'absolute',
			[theme.breakpoints.down(576)]: {
				display: 'none',
			},
		},
		cardWrapper: {
			zIndex: 1,
		},
		card: {
			display: 'flex',
			justifyContent: 'center',
			backgroundColor: theme.palette.warning.main,
			padding: theme.spacing(8, 3),
		},
		cardContent: {
			maxWidth: 400,
		},
	})
);

function Cta() {
	const classes = useStyles3();
	return (
		<Container className={classes.root}>
			<Grid container>
				<Grid item className={classes.cardWrapper}>
					<div className={classes.card}>
						<div className={classes.cardContent}>
							<Typography variant="h5" component="h2" gutterBottom>
								Fill something here like the domains
							</Typography>
						</div>
					</div>
				</Grid>
			</Grid>
		</Container>
	);
}

const useStyles2 = makeStyles((theme) =>
	createStyles({
		root: {
			display: 'flex',
			margin: theme.spacing(2, 0),
			width: '100%',
			height: 200,
			fontStyle: 'Spartan',
		},
		details: {
			display: 'flex',
			flexDirection: 'column',
		},
		content: {
			height: '100%',
			textAlign: 'center',
			display: 'flex',
			flexDirection: 'column',
			justifyContent: 'center',
			alignItems: 'center',
		},
		cover: {
			width: 225,
		},
	})
);

function MediaControlCard() {
	const classes = useStyles2();
	return (
		<>
			<Card className={classes.root}>
				<CardMedia
					className={classes.cover}
					image="https://source.unsplash.com/random"
					title="Live from space album cover"
				/>
				<div className={classes.details}>
					<CardContent className={classes.content}>
						<Typography component="h5" variant="h5" style={{ fontFamily: 'Spartan' }}>
							Aditya Mitra
						</Typography>
						<Typography
							variant="subtitle1"
							color="textSecondary"
							style={{ fontFamily: 'Major Mono Display' }}>
							Web
						</Typography>
					</CardContent>
				</div>
			</Card>
		</>
	);
}
