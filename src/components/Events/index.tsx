import type { EventType } from '@/types/index';

import styles from './events.module.css';
import Card from './card';

export default function Events({ events }: { events: Array<EventType> }) {
	const EventCards = events.map((event) => (
		<Card
			key={event.id}
			title={event.name}
			desc={event.description}
			image={event.image}
			link={event.links}
			date={event.date}
		/>
	));
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
			{/* TODO: grid layout the card images (just add a grid layout parent component here) */}
			{EventCards}
		</>
	);
}
