import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
const useStyles = makeStyles((theme) => ({
	paper1: {
		padding: theme.spacing(10),
		textAlign: 'center',
		color: theme.palette.text.secondary,
	},
	paper: {
		padding: theme.spacing(3),
		textAlign: 'center',
		color: theme.palette.text.secondary,
	},
	formControl: {
		margin: theme.spacing(3),
		padding: theme.spacing(10),
	},
	button: {
		margin: theme.spacing(1, 1, 0, 0),
	},
}));

export default function Q() {
	const classes = useStyles();

	return (
		<form>
			<Grid container spacing={0} justify="center">
				<FormControl component="fieldset" className={classes.formControl}>
					<Grid item xs={12}>
						<Paper className={classes.paper1}>
							<FormLabel>
								Question Question Question Question Question Question Question
								Question Question Question Question Question Question Question
								Question Question{' '}
							</FormLabel>
						</Paper>
					</Grid>
					<RadioGroup aria-label="quiz" name="quiz">
						<FormControlLabel value="H" control={<Radio />} label="Answer 1" />
						<FormControlLabel value="E" control={<Radio />} label="Answer 2" />
						<FormControlLabel value="N" control={<Radio />} label="Answer 3" />
						<FormControlLabel value="N0" control={<Radio />} label="Answer 4" />
					</RadioGroup>

					<Button
						type="submit"
						variant="outlined"
						color="primary"
						className={classes.button}>
						Check Answer
					</Button>
				</FormControl>
			</Grid>
		</form>
	);
}
