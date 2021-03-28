import dynamic from 'next/dynamic';
import NextImage from 'next/image';

import Faq from '@/components/Faq';

import {
	makeStyles,
	Card,
	CardContent,
	Typography,
	Grid,
	Container,
	Button,
} from '@material-ui/core';

import styles from '@/styles/landing.module.css';

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
		marginTop: '3rem',
		marginBottom: '3rem',
		paddingLeft: '15px',
		paddingRight: '15px',
		maxWidth: '1500px',
		marginLeft: 'auto',
		marginRight: 'auto',
	},
	eventContainer: {
		paddingTop: theme.spacing(3),
		paddingBottom: theme.spacing(3),
	},
	card: {
		maxWidth: '100%',
	},

	cardActions: {
		display: 'flex',
		margin: '0 10px',
		justifyContent: 'space-between',
	},
	date: {
		display: 'flex',
		button: {
			backgroundColor: '#746B6B',
			color: 'white',
		},
	},
}));

const Banners = dynamic(() => import('@/components/Banner'));
const Gallery = dynamic(() => import('@/components/Gallery'));

export default function Landing() {
	// TODO Replace images with next/image for a faster landing
	//  labels: enhance, landing
	const classes = useStyles();
	return (
		<>
			<div className={styles.background_img}>
				<NextImage src="/images/landing/background.jpg" layout="fill" objectFit="cover" />
			</div>
			<Banners />
			<Grid container className={classes.root}>
				<Grid item md={6} xs={12} className={styles.container}>
					<img src="/images/landing/logo.png" className={styles.header} />
					<p className={styles.dsc_description}>
						Google collaborates with university students who are enthusiastic about
						growing developer communities and supports them with commencing student
						clubs on their campuses. Developer Student Clubs is a program that
						recognizes and supports university students who are excited about growing
						developer communities that cultivate learning, sharing, and collaboration.
					</p>
				</Grid>
				<Grid item md={6} className={styles.introImg}>
					<img
						src="https://image.freepik.com/free-vector/modern-isometric-illustration-work-from-home_145666-793.jpg"
						className={styles.intro_image}
					/>
				</Grid>
			</Grid>
			<div>
				<h1 className={`${styles.about}`}>ABOUT DSC</h1>
			</div>
			<div className="App">
				<Container maxWidth="lg" className={classes.eventContainer}>
					<Grid container spacing={3}>
						<Grid item xs={12} sm={6} md={4}>
							<Card className={classes.card}>
								<CardContent>
									<Typography gutterBottom variant="h5" component="h2">
										Concept of DSC ?
									</Typography>
									<Typography variant="body2" color="textSecondary" component="p">
										The DSC program is a grassroots channel through which Google
										provides development skills, mobile and web development
										skills for students, towards employability.
									</Typography>
								</CardContent>
							</Card>
						</Grid>
						<Grid item xs={12} sm={6} md={4}>
							<Card className={classes.card}>
								<CardContent>
									<Typography gutterBottom variant="h5" component="h2">
										Why DSC ?
									</Typography>
									<Typography variant="body2" color="textSecondary" component="p">
										The DSC program is focused with a vision to inculcate
										individual’s with skills and knowledge, who are intrigued
										about the possibilities that developer technologies can
										bring changes to this world.
									</Typography>
								</CardContent>
							</Card>
						</Grid>
						<Grid item xs={12} sm={6} md={4}>
							<Card className={classes.card}>
								<CardContent>
									<Typography gutterBottom variant="h5" component="h2">
										Target Audiences :
									</Typography>
									<Typography variant="body2" color="textSecondary" component="p">
										Anyone who wants to build products,students from all
										undergraduate or graduate programs inquisitive about
										developer technologies and able to gain his/her skills and
										gain interest towards development.
									</Typography>
								</CardContent>
							</Card>
						</Grid>
					</Grid>
				</Container>
			</div>
			<Gallery />
			<div>
				<h1 className={`${styles.about}`}>FREQUENTLY ASKED</h1>
			</div>
			<Faq />
			<div>
				<h1 className={`${styles.about}`}>JOIN US ON DISCORD</h1>
				<p className={styles.d}>
					Join our Discord Channel to know more about the Activities, Sessions and other
					fun stuff.
				</p>
				<Grid container spacing={0} justify="center">
					<Button
						variant="contained"
						style={{ backgroundColor: '#313B86', color: 'white', marginBottom: 20 }}
						onClick={() => {
							window.open('https://discord.com/invite/nYQCMKF');
						}}>
						Join us on <img src="/discord.png" height="30px" alt="discord" />
					</Button>
				</Grid>
			</div>
		</>
	);
}
