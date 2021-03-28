import NextImage from 'next/image';

import styles from '@/styles/landing.module.css';
import { Grid, Button } from '@material-ui/core';

export default function Discord() {
	return (
		<div>
			<p className={styles.d}>
				Join our Discord Channel to know more about the Activities, Sessions and other fun
				stuff.
			</p>
			<Grid container spacing={0} justify="center">
				<Button
					variant="contained"
					style={{ backgroundColor: '#313B86', color: 'white', marginBottom: 20 }}
					onClick={() => {
						window.open('https://discord.com/invite/nYQCMKF');
					}}>
					Join us on{' '}
					<NextImage src="/discord.png" height="30px" width="95px" alt="discord" />
				</Button>
			</Grid>
		</div>
	);
}
