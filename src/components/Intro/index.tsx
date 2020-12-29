import styles from './intro.module.css';
export default function Intro() {
	return (
		<>
			<div className={`container my-5`}>
				<div className="row">
					<div className={`col-12 col-lg-6 ${styles.welcome_team}  pb-5`}>
						<h1 className={`${styles.header}`}>MEET OUR TEAM</h1>

						<p className={styles.dsc_description}>
							We are the team behind DSC KIIT. We are a proud community of passionate
							programmers who continuously strive to both improve ourselves and also
							help others in their programming endavours. We aim to foster an
							inclusive society wherein our beloved members have an opportunity to
							Network, Learn and Grow as both individuals and a team.
						</p>
					</div>
					<div className={`col-lg-6 ${styles.introImg}`}>
						<img src="https://i.imgur.com/lgc8yo3.png" className={styles.intro_image} />
					</div>
				</div>
			</div>
			<div className={`${styles.our_team} mt-5`}>
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
