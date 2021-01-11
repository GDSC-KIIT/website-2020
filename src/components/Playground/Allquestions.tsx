import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { Typography } from '@material-ui/core';
import '@fontsource/montserrat';

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

export default function Question() {
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
