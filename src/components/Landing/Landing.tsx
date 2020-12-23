import styles from "./landing.module.css";
export default function Landing() {
  return (
    <>
       <img
        src="https://visme.co/blog/wp-content/uploads/2017/07/50-Beautiful-and-Minimalist-Presentation-Backgrounds-012.jpg"
        className={styles.background_img}
      />
      <div className={`container my-5`}>
        <div className="row">
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
          <div className={`col-lg-6 ${styles.introImg}`}>
            <img
              src="https://image.freepik.com/free-vector/modern-isometric-illustration-work-from-home_145666-793.jpg"
              className={styles.intro_image}
            />
          </div>
        </div>
      </div>
    </>
  );
}
