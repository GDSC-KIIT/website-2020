import styles from './projects.module.css';
import ProjectsCard from './ProjectsCard';
import {Grid} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles({
  gridContainer: {
      paddingLeft: "40 px",
      paddingRight: "40 px"
  }
});

export default function Projects() {
    const classes = useStyles();


  return (
    <>
       <img
        src="https://i.imgur.com/tzzAJeX.png"
        className={styles.background_img}
      />
      <div className={`container my-5`}>
        <div className="row">
          <div className={`col-lg-6 ${styles.introImg}`}>
            <img
              src="https://normat.com.pe/img/otros/trabajando.gif"
              className={styles.intro_image}
            />
          </div> 
          <div className={`col-12 col-lg-6 ${styles.container}  pb-5`}>
            <img src ="/logo.png" className={`${styles.header}`}/>

            <p className={styles.dsc_description}>
              Google collaborates with university students who are enthusiastic
              about growing developer communities and supports them with
              commencing student clubs on their campuses. Developer Student
              Clubs is a program that recognizes and supports university
              students who are excited about growing developer communities that
              cultivate learning, sharing, and collaboration.
            </p>
          </div>
        </div>
        <div className="row margin">
            <Grid container spacing={4} className={classes.gridContainer}>
                <Grid item xs={12} sm={6} md={4}>
                    <ProjectsCard />
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <ProjectsCard />
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <ProjectsCard />
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <ProjectsCard />
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <ProjectsCard />
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <ProjectsCard />
                </Grid>
            </Grid>
        </div>
      </div>
    </>
  );
}
