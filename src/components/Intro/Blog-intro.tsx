import styles from "./intro.module.css";
export default function BlogIntro() {
  return (
    <>
      <div className={`container my-5`}>
        <div className="row">
          <div className={`col-12 col-lg-6 ${styles.welcome_team}  pb-5`}>
            <h1 className={`${styles.header}`}>OUR BLOGS</h1>

            <p className={styles.dsc_description}>
              Google collaborates with university students who are enthusiastic
              about growing developer communities and supports them with
              commencing student clubs on their campuses. Developer Student
              Clubs is a program that recognizes and supports university
              students who are excited about growing developer communities that
              cultivate learning, sharing, and collaboration.
            </p>
          </div>
          <div className={`col-lg-6 ${styles.introImg}`}>
            <img
              src="https://i.imgur.com/bBA31UO.png"
              className={`${styles.intro_image} ml-3`}
            />
          </div>
        </div>
      </div>
      <div className={`${styles.our_team} mt-5`}>
        <h2 className={styles.header}>Read About The Events In Our Blog</h2>
      </div>

      <div className={styles.wrapper}>
        <div className={`${styles.blue} ${styles.ball}`}></div>
        <div className={`${styles.red} ${styles.ball}`}></div>
        <div className={`${styles.yellow} ${styles.ball}`}></div>
        <div className={`${styles.green} ${styles.ball}`}></div>
      </div>
    </>
  );
}
