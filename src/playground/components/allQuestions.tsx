import '@fontsource/montserrat';
import { makeStyles, createStyles, Theme, Paper, Grid, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		root: {
			flexGrow: 1,
			marginTop: 120,
		},
		paper: {
			padding: theme.spacing(5),
			textAlign: 'center',

			color: theme.palette.text.primary,
		},
		typography: {
			fontFamily: 'montserreat',
			fontSize: 12,
		},
	})
);

export default function AllQs() {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<Grid container spacing={4} justify="center">
				<Grid item xs={10}>
					<Paper className={classes.paper}>
						<Typography variant="h5">
							Lorem Ipsum is simply dummy text of the printing and typesetting
							industry.
						</Typography>
					</Paper>
				</Grid>
				<Grid item xs={10}>
					<Paper className={classes.paper}>
						<Typography variant="h5">
							Lorem Ipsum is simply dummy text of the printing and typesetting
							industry.
						</Typography>
					</Paper>
				</Grid>
				<Grid item xs={10}>
					<Paper className={classes.paper}>
						<Typography variant="h5">
							Lorem Ipsum is simply dummy text of the printing and typesetting
							industry.
						</Typography>
					</Paper>
				</Grid>
			</Grid>
		</div>
	);
}
