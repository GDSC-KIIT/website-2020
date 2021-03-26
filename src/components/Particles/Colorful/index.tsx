import { memo } from 'react';
import styles from './styles.module.scss';

function ColorParticles() {
	const particles = [];
	for (let i = 0; i < 30; i++) {
		particles.push(<div className={styles.particle} key={i} />);
	}
	return (
		<div id="colourful-particles-container" className={styles.container}>
			{particles}
		</div>
	);
}

export default memo(ColorParticles);
