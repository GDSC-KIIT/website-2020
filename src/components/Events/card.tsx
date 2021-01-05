import EventIcon from '@material-ui/icons/Event';
import {
	Card,
	CardActions,
	CardActionArea,
	CardContent,
	CardMedia,
	Typography,
	Grid,
	Container,
	Link,
	Box,
	makeStyles,
	Button,
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
	eventContainer: {
		paddingTop: theme.spacing(3),
		paddingBottom: theme.spacing(3),
	},
	card: {
		maxWidth: '100%',
	},
	media: {
		height: 240,
	},
	cardActions: {
		display: 'flex',
		margin: '0 10px',
		justifyContent: 'space-between',
	},
	date: {
		display: 'flex',
	},
}));

interface IProps {
	title: string;
	image: string;
	date: string;
	link: string;
	desc: string;
}

/*the card image may not be sometimes visible during `npm run dev`*/
export default function CardLayout({ title, image, date, link, desc }: IProps) {
	const classes = useStyles();

	return (
		<div className="App">
			<Container maxWidth="lg" className={classes.eventContainer}>
				<Grid container spacing={3}>
					<Grid item xs={12} sm={6} md={4}>
						<Card className={classes.card}>
							<CardActionArea>
								<CardMedia className={classes.media} image={image} title={title} />
								<CardContent>
									<Typography gutterBottom variant="h5" component="h2">
										{title}
									</Typography>
									<Typography variant="body2" color="textSecondary" component="p">
										<div dangerouslySetInnerHTML={{ __html: desc }} />
									</Typography>
								</CardContent>
							</CardActionArea>
							<CardActions className={classes.cardActions}>
								<Box className={classes.date}>
									<EventIcon />
									<Box ml={2}>
										<Typography
											variant="subtitle2"
											color="textSecondary"
											component="p">
											{date}
										</Typography>
									</Box>
								</Box>
							</CardActions>
							<CardActions>
								<Button color="primary" size="small">
									<Link href={link} underline="none" color="primary">
										Find Out More
									</Link>
								</Button>
							</CardActions>
						</Card>
					</Grid>
				</Grid>
			</Container>
		</div>
	);
}
