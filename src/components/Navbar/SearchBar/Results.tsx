import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import { Box, Typography, Grid } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		resultBox: {
			boxShadow: theme.shadows[1],
			borderRadius: theme.shape.borderRadius,
			backgroundColor: theme.palette.background.paper,
			padding: theme.spacing(0.5),
			width: theme.spacing(40),
			maxHeight: theme.spacing(17),
			'&:hover': {
				backgroundColor: theme.palette.action.selected,
			},
			'&:focus': {
				backgroundColor: theme.palette.action.selected,
			},
		},
		heading: {
			...theme.typography.h5,
			color: theme.palette.text.primary,
			paddingLeft: theme.spacing(0.75),
			fontWeight: 'bolder',
		},
		text: {
			...theme.typography.subtitle2,
			color: theme.palette.text.secondary,
			paddingLeft: theme.spacing(1),
			textOverflow: 'ellipsis',
			overflow: 'hidden',
			maxHeight: theme.spacing(11),
		},

		dropdown: {
			position: 'absolute',
			marginTop: theme.spacing(1),
			left: theme.spacing(-1),
		},
	})
);

export function Results({ searchText }: IResultProps) {
	const classes = useStyles();

	const boxDisplay = searchText.length > 0 ? 'block' : 'none';

	return (
		<Box className={classes.dropdown} style={{ display: boxDisplay }}>
			<Grid
				container
				direction="column"
				justify="flex-start"
				alignItems="flex-start"
				spacing={1}>
				<Grid item>
					<Box className={classes.resultBox}>
						<Typography className={classes.heading}>this is the name</Typography>
						<div className={classes.text}>this is inside the portal</div>
					</Box>
				</Grid>
			</Grid>
		</Box>
	);
}

interface IResultProps {
	searchText: string;
}
