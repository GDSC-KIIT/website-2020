import { makeStyles, Card, CardContent, Typography, Grid, Container } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
	eventContainer: {
		paddingTop: theme.spacing(3),
		paddingBottom: theme.spacing(3),
	},
	card: {
		maxWidth: '100%',
	},
}));

export default function About() {
	const classes = useStyles();
	return (
		<Container maxWidth="lg" className={classes.eventContainer}>
			<Grid container spacing={3}>
				<Grid item xs={12} sm={6} md={4}>
					<Card className={classes.card}>
						<CardContent>
							<Typography gutterBottom variant="h5" component="h2">
								Concept of DSC ?
							</Typography>
							<Typography variant="body2" color="textSecondary" component="p">
								The DSC program is a grassroots channel through which Google
								provides development skills, mobile and web development skills for
								students, towards employability and helps to improve social skills
								for working in teams.
								<br />
							</Typography>
						</CardContent>
					</Card>
				</Grid>
				<Grid item xs={12} sm={6} md={4}>
					<Card className={classes.card}>
						<CardContent>
							<Typography gutterBottom variant="h5" component="h2">
								Why DSC ?
							</Typography>
							<Typography variant="body2" color="textSecondary" component="p">
								The DSC program is focused with a vision to inculcate individual’s
								with skills and knowledge, who are intrigued about the possibilities
								that developer technologies can bring changes to this world.
							</Typography>
						</CardContent>
					</Card>
				</Grid>
				<Grid item xs={12} sm={6} md={4}>
					<Card className={classes.card}>
						<CardContent>
							<Typography gutterBottom variant="h5" component="h2">
								Target Audiences :
							</Typography>
							<Typography variant="body2" color="textSecondary" component="p">
								Anyone who wants to build products,students from all undergraduate
								or graduate programs inquisitive about developer technologies and
								able to gain his/her skills and gain interest towards development.
							</Typography>
						</CardContent>
					</Card>
				</Grid>
			</Grid>
		</Container>
	);
}
