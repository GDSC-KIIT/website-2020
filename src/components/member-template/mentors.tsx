import styles from './members.module.css';

function Mentors() {
	return (
		<>
			<div className={`${styles.member} `}>
				<div className={styles.imageWrap}>
					<img src="/assets/images/mentors/kd.jpg" alt="Member photo" />
				</div>
				<div className={styles.info}>
					<span className={styles.school}>Prof. Kumar Devdutta</span>
				</div>
				<div className={styles.teamInfo}>
					<h3>Prof. Kumar Devdutta</h3>
					<span>Assistant Professor</span>
				</div>
			</div>
			<div className={`${styles.member} `}>
				<div className={styles.imageWrap}>
					<img src="/assets/images/mentors/km.jpg" alt="Member photo" />
				</div>
				<div className={styles.info}>
					<span className={styles.school}>Dr. Kumar Mohanty</span>
				</div>
				<div className={styles.teamInfo}>
					<h3>Dr. Kumar Mohanty</h3>
					<span>Director (Corporate Relations)</span>
				</div>
			</div>
			<div className={`${styles.member} `}>
				<div className={styles.imageWrap}>
					<img src="/assets/images/mentors/ar.jpg" alt="Member photo" />
				</div>
				<div className={styles.info}>
					<span className={styles.school}>Dr. Abhishek Ray</span>
				</div>
				<div className={styles.teamInfo}>
					<h3>Dr. Abhishek Ray</h3>
					<span>Associate Dean (T&P)</span>
				</div>
			</div>
			<div className={`${styles.member} `}>
				<div className={styles.imageWrap}>
					<img src="/assets/images/mentors/pb.jpg" alt="Member photo" />
				</div>
				<div className={styles.info}>
					<span className={styles.school}>Dr. Prachet Bhuyan</span>
				</div>
				<div className={styles.teamInfo}>
					<h3>Dr. Prachet Bhuyan</h3>
					<span>Associate Dean (T&P)</span>
				</div>
			</div>
		</>
	);
}

export default Mentors;
