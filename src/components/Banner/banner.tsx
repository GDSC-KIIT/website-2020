import { makeStyles, Paper, Typography, Grid, Link } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
	bannerMain: {
		position: 'relative',
		backgroundColor: 'grey',
		color: 'white',
		marginBottom: '1rem',
		backgroundSize: 'cover',
		backgroundRepeat: 'no-repeat',
		backgroundPosition: 'center',
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

interface IProps {
	image: string;
	title: string;
	eye_catcher: string;
	link: string;
}

export default function Banner({ title, image, eye_catcher, link }: IProps) {
	const classes = useStyles();

	return (
		<Paper className={classes.bannerMain} style={{ backgroundImage: `url(${image})` }}>
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
