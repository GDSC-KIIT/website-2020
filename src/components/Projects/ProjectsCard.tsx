import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
	Grid,
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
import { getStrapiMediaProject } from '../../lib/media';
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
	const imageUrl = getStrapiMediaProject(projectInfo.project_logo);
	const classes = useStyles();

	return (
		<>
			{console.log(projectInfo, displayHeader)}
			<Grid item xs={12} sm={6} md={3}>
				<Card className={classes.root} raised={true}>
					<CardActionArea>
						<CardMedia
							className={classes.media}
							// image={imageUrl}
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
								{/* 
<<<<<<< HEAD
								<Typography>{projectInfo.members.names}</Typography>
======= */}
								<Typography>Project Members Name</Typography>
								{/* >>>>>>> 297fce798fa665e13d5c5e4819c07f6a0b2d5f34 */}
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
			</Grid>
		</>
	);
}
