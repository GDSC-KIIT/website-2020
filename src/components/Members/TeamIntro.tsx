import NextImage from 'next/image';
import styles from '@/styles/intro.module.css';

import { Grid, makeStyles } from '@material-ui/core';

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
					<h1 className={`${styles.header}`}>MEET OUR TEAM</h1>

					<p className={styles.dsc_description}>
						We are the team behind DSC KIIT. We are a proud community of passionate
						programmers who continuously strive to both improve ourselves and also help
						others in their programming endavours. We aim to foster an inclusive society
						wherein our beloved members have an opportunity to Network, Learn and Grow
						as both individuals and a team.
					</p>
				</Grid>
				<Grid item md={6} className={styles.introImg}>
					<NextImage
						height="400"
						width="450"
						src="/images/members/team_intro.png"
						className={styles.intro_image}
					/>
				</Grid>
			</Grid>
			<div className={styles.our_team}>
				<h1 className={styles.header}>Our Team</h1>
			</div>

			<div className={styles.wrapper}>
				<div className={`${styles.blue} ${styles.ball}`}></div>
				<div className={`${styles.red} ${styles.ball}`}></div>
				<div className={`${styles.yellow} ${styles.ball}`}></div>
				<div className={`${styles.green} ${styles.ball}`}></div>
			</div>

			<h5 style={{ textAlign: 'center', color: 'grey' }}>
				Meet the amazing team of DSC KiiT
			</h5>
		</>
	);
}
