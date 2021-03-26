import { memo } from 'react';
import styles from './styles.module.scss';

function PaperParticles() {
	const manySquares = [];

	for (let i = 0; i < 9; i++) {
		manySquares.push(<div className={styles.square} key={i} />);
	}

	return (
		<div className={styles.outerContainer}>
			<div id="paper-particles-container" className={styles.innerContainer}>
				{manySquares}
			</div>
		</div>
	);
}

export default memo(PaperParticles);
