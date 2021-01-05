import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';

const useStyles = makeStyles((theme) => ({
	mainFeaturedPost: {
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
	mainFeaturedPostContent: {
		position: 'relative',
		padding: '2rem',
	},
}));

export function getStaticProps() {
	return {
		props: {
			post: {
				image: 'https://source.unsplash.com/random',
				title: 'a big title',
				description: `a lot
            of te
            
            fsda 
            
            written in mulitple lines`,
				linkText: 'this is the subtitle',
			},
			imageText: 'big gorilla',
		},
	};
}

export default function MainFeaturedPost(props: any) {
	const classes = useStyles();
	const { post } = props;

	return (
		<>
			<Paper
				className={classes.mainFeaturedPost}
				style={{ backgroundImage: `url(${post.image})` }}>
				<div className={classes.overlay} />
				<Grid container>
					<Grid item md={6}>
						<div className={classes.mainFeaturedPostContent}>
							<Typography component="h1" variant="h3" color="inherit" gutterBottom>
								{post.title}
							</Typography>
							<Typography variant="h5" color="inherit" paragraph>
								{post.description}
							</Typography>
							<Link variant="subtitle1" href="#">
								{post.linkText}
							</Link>
						</div>
					</Grid>
				</Grid>
			</Paper>
			<img src="https://source.unsplash.com/random" />
		</>
	);
}
