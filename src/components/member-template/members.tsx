import styles from "./members.module.css";
const positionHeading = [
  "DSC KIIT LEAD",
  "Web Development",
  "Machine Learning",
  "Android and Flutter",
  "Cloud and Network Security",
  "Photography and Videography",
  "Management",
  "UI/UX and Design",
  "Content Writing",
  "3D Modelling",
];
declare global {
  namespace JSX {
    interface IntrinsicElements {
      center: React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement>,
        HTMLElement
      >;
    }
  }
}
function Members({ memberInfo, displayHeader }: any) {
  return (
    <>
      {displayHeader ? (
        <center className={styles.techDesc}>
          <h3>{positionHeading[memberInfo.order]}</h3>
        </center>
      ) : (
        ""
      )}

      <div className={`${styles.member} mb-5`}>
        <div className={styles.imageWrap}>
          <img src={memberInfo.image_path} alt="Member photo" />
        </div>
        <div className={styles.info}>
          <span className={styles.school}>{memberInfo.name}</span>
          <span className={styles.state}>
            <i
              className={`fab fa-fw fa-twitter-square ${styles.fa} ${styles.fa_twitter}`}
              aria-hidden="true"
            ></i>
            <i
              className={`fab fa-fw fa-github-square ${styles.fa} ${styles.fa_github}`}
              aria-hidden="true"
            ></i>
            <i
              className={`fab fa-fw fa-facebook-square ${styles.fa} ${styles.fa_facebook}`}
              aria-hidden="true"
            ></i>
            <i
              className={`fab fa-fw fa-linkedin ${styles.fa} ${styles.fa_linkedin_square}`}
              aria-hidden="true"
            ></i>
          </span>
        </div>

        <div className={styles.teamInfo}>
          <h3>{memberInfo.name}</h3>
          <span>{memberInfo.position}</span>
        </div>
      </div>
    </>
  );
}

export default Members;
