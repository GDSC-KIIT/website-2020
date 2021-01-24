import NextImage from 'next/image';

import type { BannerType } from '@/types/index';

import { makeStyles, Paper, Typography, Grid, Link } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
	bannerMain: {
		position: 'relative',
		backgroundColor: 'grey',
		color: 'white',
		marginBottom: '1rem',
		marginTop: '1rem',
		height: '40vh',
	},
	overlay: {
		position: 'absolute',
		top: 0,
		bottom: 0,
		right: 0,
		left: 0,
		backgroundColor: 'rgba(0,0,0,0.3)',
	},
	bannerContent: {
		position: 'relative',
		padding: '2rem',
	},
}));

export default function Banner({ title, image, eye_catcher, link }: Omit<BannerType, 'id'>) {
	const classes = useStyles();

	return (
		<Paper className={classes.bannerMain}>
			{image ? <NextImage src={image} layout="fill" objectFit="cover" /> : null}
			<div className={classes.overlay} />
			<Grid container>
				<Grid item md={6}>
					<div className={classes.bannerContent}>
						<Typography component="h1" variant="h3" color="inherit" gutterBottom>
							{title}
						</Typography>
						<Typography variant="h5" color="inherit" paragraph>
							{eye_catcher}
						</Typography>
						<Link variant="subtitle1" href={link}>
							Check this out now
						</Link>
					</div>
				</Grid>
			</Grid>
		</Paper>
	);
}
