import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import { Box, Container, Typography, Grid } from '@material-ui/core';

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
	})
);

export default function Variants() {
	const classes = useStyles();

	return (
		<Container style={{ margin: '1rem' }}>
			<Grid
				container
				direction="column"
				justify="flex-start"
				alignItems="flex-start"
				spacing={1}>
				<Grid item>
					<Box className={classes.resultBox}>
						<Typography className={classes.heading}>this is the name</Typography>
						<div className={classes.text}>
							uam autem dolorum omnis accusantium. Nulla temporibus sint aut nihil
							mollitia laboriosam ut. Illo praesentium non qui. uam autem dolorum
							omnis accusantium. Nulla temporibus sint aut nihil mollitia laboriosam
							ut. Illo praesentium non qui. Provident porro quidem quod quasi a
							incidunt praesentium. Commodi aperiam totam quia libero et dolorum hic
							reprehenderit. Accusantium voluptate maxime sed unde provident.
							Inventore amet doloremque esse. Enim quae rem nihil adipisci rerum sed
							accusantium. Nisi quos doloribus eaque. Est veritatis voluptas omnis
							iusto illo aut omnis. Unde aut repellendus suscipit. Incidunt recusandae
							a repellat. Se
						</div>
					</Box>
				</Grid>
				<Grid item>
					<Box className={classes.resultBox}>
						<Typography className={classes.heading}>this is the name</Typography>
						<div className={classes.text}>
							uam autem dolorum omnis accusantium. Nulla temporibus sint aut nihil
							mollitia laboriosam ut. Illo praesentium non qui. uam autem dolorum
							omnis accusantium. Nulla temporibus sint aut nihil mollitia laboriosam
							ut. Illo praesentium non qui. Provident porro quidem quod quasi a
							incidunt praesentium. Commodi aperiam totam quia libero et dolorum hic
							reprehenderit. Accusantium voluptate maxime sed unde provident.
							Inventore amet doloremque esse. Enim quae rem nihil adipisci rerum sed
							accusantium. Nisi quos doloribus eaque. Est veritatis voluptas omnis
							iusto illo aut omnis. Unde aut repellendus suscipit. Incidunt recusandae
							a repellat. Se
						</div>
					</Box>
				</Grid>
			</Grid>
		</Container>
	);
}
