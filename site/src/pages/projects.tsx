import type { GetStaticProps } from 'next';

import { makeStyles, Grid } from '@material-ui/core';

import Layout from '@/components/Layout';
import ProjectsCard, { IProjects } from '@/components/Projects/ProjectsCard';
import fetchProjects from '@/lib/staticData/projects';

import styles from '@/styles/projects.module.css';

const useStyles = makeStyles({
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
	gridContainer: {
		paddingLeft: '40 px',
		paddingRight: '40 px',
		marginLeft: 'auto',
		marginBottom: '10 px',
	},
});

export default function Home({ projects }: IProjects) {
	const classes = useStyles();

	return (
		<>
			<Layout pageName="PROJECTS">
				<img src="/images/landing/background2.png" className={styles.background_img} />
				<Grid container className={classes.root}>
					<Grid item md={6} xs={12} className={styles.container}>
						<img
							src="https://normat.com.pe/img/otros/trabajando.gif"
							className={styles.intro_image}
						/>
					</Grid>
					<Grid item md={6} className={styles.introImg}>
						<h1 className={`${styles.header}`}>PROJECTS BY DSC KIIT</h1>

						<p className={styles.dsc_description}>
							Google collaborates with university students who are enthusiastic about
							growing developer communities and supports them with commencing student
							clubs on their campuses. Developer Student Clubs is a program that
							recognizes and supports university students who are excited about
							growing developer communities that cultivate learning, sharing, and
							collaboration.
						</p>
					</Grid>
				</Grid>

				<div className={`${styles.our_team} mt-5`}>
					<h1 className={styles.header}>Our Projects</h1>
				</div>

				<div className={styles.wrapper}>
					<div className={`${styles.blue} ${styles.ball}`}></div>
					<div className={`${styles.red} ${styles.ball}`}></div>
					<div className={`${styles.yellow} ${styles.ball}`}></div>
					<div className={`${styles.green} ${styles.ball}`}></div>
				</div>

				<h5 style={{ textAlign: 'center', color: 'grey' }}>
					These are the amazing projects made by DSC KIIT Team
				</h5>

				<div className="row margin">
					<Grid container spacing={4} className={classes.gridContainer}>
						{projects.map((project) => (
							<ProjectsCard project={project} key={project.id} />
						))}
					</Grid>
				</div>
			</Layout>
		</>
	);
}

export const getStaticProps: GetStaticProps<IProjects> = async () => {
	const projects = await fetchProjects();
	return {
		props: { projects },
		revalidate: 60,
	};
};
