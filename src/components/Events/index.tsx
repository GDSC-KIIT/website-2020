import { fetchAllEvents } from '@/lib/staticData/events';

import styles from './events.module.css';
import Card from './card';

export default function Events() {
	// fetchAllEvents().then(f=>{
	// 	f.forEach(t=>console.log(t.id,t.description))
	// })

	return (
		<>
			<div className={`container my-5`}>
				<h1 className={`${styles.header}`}>UPCOMING EVENTS</h1>

				<p className={styles.dsc_description}>
					Events are a great way to share knowledge and indulge in great discussions with
					your peers. DSC KIIT has hosted a variety of events to teach important skills
					and improve the coding culture of our college and its sure that its going to
					host more events Stay tuned for future events!
				</p>
			</div>
			<Card />
		</>
	);
}
