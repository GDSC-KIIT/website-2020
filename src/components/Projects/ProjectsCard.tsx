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
import MoreIcon from '@material-ui/icons/More';
// import { getStrapiMedia } from '../../lib/media';
declare global {
	namespace JSX {
		interface IntrinsicElements {
			center: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
		}
	}
}
const useStyles = makeStyles({
	root: {
		maxWidth: 345,
	},
	media: {
		height: 200,
	},
});

export default function ProjectsCard({ projectInfo, displayHeader }: any) {
	// const imageUrl = getStrapiMedia(projectInfo.image_path);
	const classes = useStyles();

	return (
		<>
			{console.log(projectInfo, displayHeader)}
			<Card className={classes.root} raised={true}>
				<CardActionArea>
					<CardMedia
						className={classes.media}
						image="/projectslogo.png"
						title="DSC KIIT projects"
					/>
					<CardContent>
						<Typography gutterBottom variant="h5" component="h2">
							{projectInfo.name}
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
						href="https://github.com">
						GitHub
					</Button>
					<Button
						variant="outlined"
						color="primary"
						startIcon={<MoreIcon />}
						href="https://github.com">
						Know More
					</Button>
				</CardActions>
			</Card>
		</>
	);
}
