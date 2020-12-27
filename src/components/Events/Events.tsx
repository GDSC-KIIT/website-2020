import styles from './events.module.css';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

import EventIcon from '@material-ui/icons/Event';

const useStyles = makeStyles({
	root: {
		maxWidth: 340,
		marginLeft: 50,
		marginButtom: 50,
	},
	media: {
		height: 200,
	},
});

export default function Events() {
	const classes = useStyles();
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
			<Grid item>
				<Card className={classes.root}>
					<CardActionArea>
						<CardMedia className={classes.media} image="" title="DSC KIIT Events" />
						<CardContent>
							<Typography gutterBottom variant="h5" component="h2">
								Event
							</Typography>
							<Typography variant="body2" color="textSecondary" component="p">
								description about the event
							</Typography>
						</CardContent>
					</CardActionArea>
					<Grid style={{ padding: 3 }}>
						<Typography>
							<EventIcon />
							DD/MM/YY
						</Typography>
					</Grid>
					<CardActions>
						<Button size="small" color="primary">
							Learn More
						</Button>
					</CardActions>
				</Card>
			</Grid>
		</>
	);
}
