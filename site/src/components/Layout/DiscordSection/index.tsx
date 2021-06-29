import styles from './discord.module.css';
export default function DiscordSection() {
	return (
		<>
			<section className={styles.discord}>
				<div>
					<h3>Join us on Discord</h3>

					<div>
						<p className={styles.d}>
							Join our Discord Channel to know more about the Activities, Sessions and
							other fun stuff.
						</p>
					</div>
					<div className={styles.container}>
						<div className={styles.inviteContainer}>
							<div className={styles.logoContainer}>
								<img className={styles.logo} src="/discord.svg" />
							</div>
							<div className={styles.acceptContainer}>
								<div className={styles.discordInvitation}>
									<h1>YOU'VE BEEN INVITED TO JOIN</h1>
									<div className={styles.serverInfo}>
										<p>
											<span className={styles.server}>
												Discord Offical Server
											</span>
											<span className={styles.by}>by</span>
											<span className={styles.name}>DSC KIIT</span>
										</p>
									</div>

									<a
										href="https://discord.com/invite/nYQCMKF"
										target="_blank"
										rel="noopener noreferrer">
										<button className={styles.acceptBtn}>Accept Invite</button>
									</a>
								</div>
							</div>
						</div>
					</div>

					<br />
				</div>
			</section>
		</>
	);
}
