import styles from "./members.module.css";
import { getStrapiMedia } from "../../lib/media";
import Link from "next/link";
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
  const imageUrl = getStrapiMedia(memberInfo.image_path);
  return (
    <>
      {console.log(memberInfo, displayHeader)}
      {displayHeader ? (
        <center className={styles.techDesc}>
          <h3>{positionHeading[memberInfo.order]}</h3>
        </center>
      ) : (
        ""
      )}
      <div className={`${styles.member} mb-5`}>
        <div className={styles.imageWrap}>
          <img src={imageUrl} alt="Member photo" />
        </div>
        <div className={styles.info}>
          <span className={styles.school}>{memberInfo.name}</span>
          <span className={styles.state}>
            {memberInfo.twitter ? (
              <Link href={memberInfo.twitter}>
                <i
                  className={`fab fa-fw fa-twitter-square ${styles.fa} ${styles.fa_twitter}`}
                  aria-hidden="true"
                ></i>
              </Link>
            ) : null}
            <Link href={memberInfo.github}>
              <i
                className={`fab fa-fw fa-github-square ${styles.fa} ${styles.fa_github}`}
                aria-hidden="true"
              ></i>
            </Link>
            {memberInfo.facebook ? (
              <Link href={memberInfo.facebook}>
                <i
                  className={`fab fa-fw fa-facebook-square ${styles.fa} ${styles.fa_facebook}`}
                  aria-hidden="true"
                ></i>
              </Link>
            ) : null}
            {memberInfo.linkedIn ? (
              <Link href={memberInfo.linkedIn}>
                <i
                  className={`fab fa-fw fa-linkedin ${styles.fa} ${styles.fa_linkedin_square}`}
                  aria-hidden="true"
                ></i>
              </Link>
            ) : null}
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
