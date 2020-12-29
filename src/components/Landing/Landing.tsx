import styles from './landing.module.css';
import { makeStyles } from '@material-ui/core/styles';
import Programming from '../Programming/Programming';
import {
	Card,
	CardActionArea,
	CardContent,
	Typography,
	Grid,
	Container,
	Button,
	Box,
} from '@material-ui/core';
const useStyles = makeStyles((theme) => ({
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
export default function Landing() {
	const classes = useStyles();
	return (
		<>
			<img
				src="https://visme.co/blog/wp-content/uploads/2017/07/50-Beautiful-and-Minimalist-Presentation-Backgrounds-012.jpg"
				className={styles.background_img}
			/>
			<div className={`container my-5`}>
				<div className="row">
					<div className={`col-12 col-lg-6 ${styles.container}  pb-5`}>
						<img src="/logo.png" className={`${styles.header}`} />

						<p className={styles.dsc_description}>
							Google collaborates with university students who are enthusiastic about
							growing developer communities and supports them with commencing student
							clubs on their campuses. Developer Student Clubs is a program that
							recognizes and supports university students who are excited about
							growing developer communities that cultivate learning, sharing, and
							collaboration.
						</p>
					</div>
					<div className={`col-lg-6 ${styles.introImg}`}>
						<img
							src="https://image.freepik.com/free-vector/modern-isometric-illustration-work-from-home_145666-793.jpg"
							className={styles.intro_image}
						/>
					</div>
				</div>
			</div>
			<div className={`container my-5`}>
				<h1 className={`${styles.about}`}>ABOUT DSC</h1>
			</div>
			<div className="App">
				<Container maxWidth="lg" className={classes.eventContainer}>
					<Grid container spacing={3}>
						<Grid item xs={12} sm={6} md={4}>
							<Card className={classes.card}>
								<CardActionArea>
									<CardContent>
										<Typography gutterBottom variant="h5" component="h2">
											Concept of DSC ?
										</Typography>
										<Typography
											variant="body2"
											color="textSecondary"
											component="p">
											The DSC program is a grassroots channel through which
											Google provides development skills, mobile and web
											development skills for students, towards employability.
										</Typography>
									</CardContent>
								</CardActionArea>
							</Card>
						</Grid>
						<Grid item xs={12} sm={6} md={4}>
							<Card className={classes.card}>
								<CardActionArea>
									<CardContent>
										<Typography gutterBottom variant="h5" component="h2">
											Why DSC ?
										</Typography>
										<Typography
											variant="body2"
											color="textSecondary"
											component="p">
											The DSC program is focused with a vision to inculcate
											individual’s with skills and knowledge, who are
											intrigued about the possibilities that developer
											technologies can bring changes to this world.
										</Typography>
									</CardContent>
								</CardActionArea>
							</Card>
						</Grid>
						<Grid item xs={12} sm={6} md={4}>
							<Card className={classes.card}>
								<CardActionArea>
									<CardContent>
										<Typography gutterBottom variant="h5" component="h2">
											Target Audiences :
										</Typography>
										<Typography
											variant="body2"
											color="textSecondary"
											component="p">
											Anyone who wants to build products,students from all
											undergraduate or graduate programs inquisitive about
											developer technologies and able to gain his/her skills
											and gain interest towards development.
										</Typography>
									</CardContent>
								</CardActionArea>
							</Card>
						</Grid>
					</Grid>
				</Container>
			</div>
			<div className={`container my-5`}>
				<h1 className={`${styles.about}`}>TECH STACKS</h1>
			</div>
			<Programming />
			<div className={`container my-5`}>
				<h1 className={`${styles.about}`}>JOIN OUR DISCORD</h1>
				<p className={styles.d}>
					Join our Discord Channel to know more about the Activities, Sessions and other
					fun stuff.
				</p>
				<Box textAlign="center">
					<Button
						variant="contained"
						style={{ backgroundColor: '#313B86', color: 'white' }}
						onClick={() => {
							window.open('https://discord.com/invite/nYQCMKF');
						}}>
						Join us on <img src="/discord.png" height="30px" alt="discord" />
					</Button>
				</Box>
			</div>
		</>
	);
}
