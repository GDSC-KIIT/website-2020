import { Grid, makeStyles } from '@material-ui/core';

import styles from '@/components/Intro/intro.module.css';

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
}));

export default function Intro() {
	const classes = useStyles();
	return (
		<>
			<Grid container className={classes.root}>
				<Grid item md={6} xs={12} className={styles.welcome_team}>
					<h1 className={`${styles.header}`}>MEET OUR MENTORS</h1>

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
						src="https://image.freepik.com/free-vector/internship-job-illustration_52683-50829.jpg"
						className={styles.intro_image}
					/>
				</Grid>
			</Grid>

			<div
				className={`${styles.our_team}`}
				style={{
					marginTop: '3rem',
				}}>
				<h1 className={styles.header}>Mentors</h1>
			</div>

			<div className={styles.wrapper}>
				<div className={`${styles.blue} ${styles.ball}`}></div>
				<div className={`${styles.red} ${styles.ball}`}></div>
				<div className={`${styles.yellow} ${styles.ball}`}></div>
				<div className={`${styles.green} ${styles.ball}`}></div>
			</div>

			<h3
				style={{
					textAlign: 'center',
					color: '#cfcece',
					marginTop: '1rem',
					marginBottom: '3rem',
				}}>
				Under the patronage of
			</h3>
		</>
	);
}
