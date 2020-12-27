import styles from './readyToTalk.module.css';
declare global {
	namespace JSX {
		interface IntrinsicElements {
			center: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
		}
	}
}
export default function ReadyToTalk() {
	return (
		<>
			<section className={styles.ready_to_talk}>
				<div className="container">
					<h3>Ready to talk?</h3>
					<p>Google Assistant can answer most of your questions.</p>
					<div className={styles.icon}>
						<div
							className={styles.bar}
							style={{ backgroundColor: '#3498db', marginLeft: -60 }}></div>
						<div
							className={styles.bar}
							style={{ backgroundColor: '#e74c3c', marginLeft: -20 }}></div>
						<div
							className={styles.bar}
							style={{ backgroundColor: '#f1c40f', marginLeft: 20 }}></div>
						<div
							className={styles.bar}
							style={{ backgroundColor: '#27ae60', marginLeft: 60 }}></div>
					</div>

					<a
						href="https://assistant.google.com/services/invoke/uid/0000006c15659a07"
						target="_blank"
						className={`btn ${styles.talkDSC}`}
						style={{ color: 'grey', backgroundColor: 'white' }}>
						Talk to DSC KIIT
					</a>
					<br />
					<br />

					<center>
						<a
							href="#contact"
							className={`btn ${styles.contactAssist}`}
							style={{ color: 'grey', backgroundColor: 'white' }}>
							Contact
						</a>
					</center>
				</div>
			</section>
		</>
	);
}
