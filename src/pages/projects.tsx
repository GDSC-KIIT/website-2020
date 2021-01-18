// import Head from 'next/head';
// import Project from '@/components/Projects/index';
import ReadyToTalk from '@/components/ReadyToTalk';
import Layout from '@/components/Layout';
import styles from '../components/Projects/projects.module.css';
import ProjectsCard from '@/components/Projects/ProjectsCard';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { GetStaticProps } from 'next';
import { fetchAPIProjects } from '../lib/api';
import { useEffect } from 'react';
let order = -1;
let displayHeader = false;

const useStyles = makeStyles({
	gridContainer: {
		paddingLeft: '40 px',
		paddingRight: '40 px',
	},
});

export default function Home({ allProjectsData }: any) {
	useEffect(() => {
		order = -1;
	});
	const classes = useStyles();
	console.log(allProjectsData);

	return (
		<>
			{/* <Head>
				<link
					rel="stylesheet"
					href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css"
					integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z"
					crossOrigin="anonymous"
				/>
				<link
					rel="stylesheet"
					href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css"
				/>
			</Head> */}

			<Layout pageName="PROJECTS">
				<img src="https://i.imgur.com/tzzAJeX.png" className={styles.background_img} />
				<div className={`container my-5`}>
					<div className="row">
						<div className={`col-lg-6 ${styles.introImg}`}>
							<img
								src="https://normat.com.pe/img/otros/trabajando.gif"
								className={styles.intro_image}
							/>
						</div>
						<div className={`col-12 col-lg-6 ${styles.container}  pb-5`}>
							<h1 className={`${styles.header}`}>PROJECTS BY DSC KIIT</h1>

							<p className={styles.dsc_description}>
								Google collaborates with university students who are enthusiastic
								about growing developer communities and supports them with
								commencing student clubs on their campuses. Developer Student Clubs
								is a program that recognizes and supports university students who
								are excited about growing developer communities that cultivate
								learning, sharing, and collaboration.
							</p>
						</div>
					</div>

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
							<Grid item xs={12} sm={6} md={4}>
								{/* <ProjectsCard /> */}
								{allProjectsData &&
									allProjectsData.map(({ ...project }) => {
										{
											console.log(order);
										}
										if (project.order > order) {
											order = project.order;
											displayHeader = true;
										} else {
											displayHeader = false;
										}
										// console.log(displayHeader)
										return (
											<ProjectsCard
												projectInfo={project}
												key={project.id}
												displayHeader={displayHeader}
											/>
										);
									})}
							</Grid>
						</Grid>
					</div>
				</div>
				<ReadyToTalk />
			</Layout>
		</>
	);
}

export const getStaticProps: GetStaticProps = async () => {
	// Run API calls in parallel
	const allProjectsData = await fetchAPIProjects('/projects');
	return {
		props: { allProjectsData },
	};
};
