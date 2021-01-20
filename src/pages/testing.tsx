import { Link, makeStyles, Typography, Paper } from '@material-ui/core';

const useStyles = makeStyles({
	depositContext: {
		flex: 1,
	},
});

export default function Deposits() {
	const classes = useStyles();
	return (
		<Paper>
			<Typography component="p" variant="h4">
				$3,024.00
			</Typography>
			<Typography color="textSecondary" className={classes.depositContext}>
				on 15 March, 2019
			</Typography>
			<div>
				<Link color="primary" href="#">
					View balance
				</Link>
			</div>
		</Paper>
	);
}
