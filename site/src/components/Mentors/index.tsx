import styles from '@/styles/members.module.css';
import Searchable from '@/components/Searchable';

export default function Mentors() {
	return (
		<>
			<div className={`${styles.member} `}>
				<div className={styles.imageWrap}>
					<img src="/images/mentors/kd.jpg" alt="Mentor photo" />
				</div>
				<div className={styles.info}>
					<span className={styles.school}>Prof. Kumar Devdutta</span>
				</div>
				<Searchable name="Prof. Kumar Devdutta">
					<div className={styles.teamInfo}>
						<h3>Prof. Kumar Devdutta</h3>
						<span>Assistant Professor</span>
					</div>
				</Searchable>
			</div>
			<div className={`${styles.member} `}>
				<div className={styles.imageWrap}>
					<img src="/images/mentors/km.jpg" alt="Mentor photo" />
				</div>
				<div className={styles.info}>
					<span className={styles.school}>Dr. Kumar Mohanty</span>
				</div>
				<Searchable name={'Dr. Kumar Mohanty'}>
					<div className={styles.teamInfo}>
						<h3>Dr. Kumar Mohanty</h3>
						<span>Director (Corporate Relations)</span>
					</div>
				</Searchable>
			</div>
			<div className={`${styles.member} `}>
				<div className={styles.imageWrap}>
					<img src="/images/mentors/ar.jpg" alt="Mentor photo" />
				</div>
				<div className={styles.info}>
					<span className={styles.school}>Dr. Abhishek Ray</span>
				</div>
				<Searchable name={'Dr. Abhishek Ray'}>
					<div className={styles.teamInfo}>
						<h3>Dr. Abhishek Ray</h3>
						<span>Associate Dean (T{'&'}P)</span>
					</div>
				</Searchable>
			</div>
			<div className={`${styles.member} `}>
				<div className={styles.imageWrap}>
					<img src="/images/mentors/pb.jpg" alt="Mentor photo" />
				</div>
				<div className={styles.info}>
					<span className={styles.school}>Dr. Prachet Bhuyan</span>
				</div>
				<Searchable name={'Dr. Prachet Bhuyan'}>
					<div className={styles.teamInfo}>
						<h3>Dr. Prachet Bhuyan</h3>
						<span>Associate Dean (T&P)</span>
					</div>
				</Searchable>
			</div>
		</>
	);
}
