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
	Button,
	Box,
	makeStyles,
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

export default function CardLayout({ title, image, date, link, desc }: IProps) {
	const classes = useStyles();

	return (
		<div className="App">
			<Container maxWidth="lg" className={classes.eventContainer}>
				<Grid container spacing={3}>
					<Grid item xs={12} sm={6} md={4}>
						<Card className={classes.card}>
							<CardActionArea>
								<CardMedia
									className={classes.media}
									image="https://th.bing.com/th/id/OIP.-IrELnNl4M2yJPk6PlelYAHaE7?pid=Api&rs=1"
									title="Event Image"
								/>
								<CardContent>
									<Typography gutterBottom variant="h5" component="h2">
										Event 1
									</Typography>
									<Typography variant="body2" color="textSecondary" component="p">
										The description of the event is given here
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
											Date
										</Typography>
									</Box>
								</Box>
							</CardActions>
							<CardActions>
								<Button size="small" color="primary">
									Learn More
								</Button>
							</CardActions>
						</Card>
					</Grid>
				</Grid>
			</Container>
		</div>
	);
}
