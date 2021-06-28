import {
	makeStyles,
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

import type { ProjectDataType } from '@/types/index';

const useStyles = makeStyles({
	root: {
		maxWidth: 345,
	},
	media: {
		height: 200,
	},
});

export default function ProjectsCard({ project }: IProject) {
	const classes = useStyles();

	return (
		<>
			<Grid item xs={12} sm={6} md={3}>
				<Card className={classes.root} raised={true}>
					<CardActionArea>
						<CardMedia
							className={classes.media}
							image={project.logo.url}
							title="DSC KIIT projects"
						/>
						<CardContent>
							<Typography gutterBottom variant="h5" component="h2">
								{project.name}
							</Typography>
							<div
								style={{
									display: 'flex',
									justifyContent: 'flex-start',
									alignItems: 'center',
									marginTop: 10,
								}}>
								<PersonIcon style={{ marginRight: 10 }} />
								<Typography>{displayProjectMembers(project.members)}</Typography>
							</div>
						</CardContent>
					</CardActionArea>
					<CardActions>
						<Button
							variant="outlined"
							color="primary"
							startIcon={<GitHubIcon />}
							href={project.repository}>
							GitHub
						</Button>
					</CardActions>
				</Card>
			</Grid>
		</>
	);
}

function displayProjectMembers(members: string): string {
	return members
		.split(',')
		.map((member) => member.trim())
		.join(', ');
}

export interface IProjects {
	projects: Array<ProjectDataType>;
}

interface IProject {
	project: ProjectDataType;
}
