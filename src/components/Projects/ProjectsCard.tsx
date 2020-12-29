import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
	Card,
	CardActionArea,
	CardActions,
	CardContent,
	CardMedia,
	Typography,
	Button,
} from '@material-ui/core';
import { GitHub as GitHubIcon, Person as PersonIcon } from '@material-ui/icons';

const useStyles = makeStyles({
	root: {
		maxWidth: 345,
	},
	media: {
		height: 200,
	},
});

export default function ProjectsCard() {
	const classes = useStyles();

	return (
		<Card className={classes.root} raised={true}>
			<CardActionArea>
				<CardMedia
					className={classes.media}
					image="/projectslogo.png"
					title="DSC KIIT projects"
				/>
				<CardContent>
					<Typography gutterBottom variant="h5" component="h2">
						Project
					</Typography>
					<div
						style={{
							display: 'flex',
							justifyContent: 'flex-start',
							alignItems: 'center',
							marginTop: 10,
						}}>
						<PersonIcon style={{ marginRight: 10 }} />

						<Typography>Project Members Name</Typography>
					</div>
				</CardContent>
			</CardActionArea>
			<CardActions>
				<Button
					variant="outlined"
					color="primary"
					startIcon={<GitHubIcon />}
					href="https://github.com
				">
					GitHub
				</Button>
			</CardActions>
		</Card>
	);
}
