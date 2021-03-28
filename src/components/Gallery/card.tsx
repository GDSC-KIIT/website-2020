import { capitalizeEachWord, getReadableNameFromDomainUpperCased } from '@/lib/text';
import {
	createStyles,
	makeStyles,
	Card,
	CardContent,
	CardMedia,
	Typography,
} from '@material-ui/core';
import type { DataImageType } from '@/types/index';

const useStyles = makeStyles((theme) =>
	createStyles({
		root: {
			display: 'flex',
			margin: theme.spacing(2, 0),
			width: '100%',
			height: 200,
			fontStyle: 'Spartan',
		},
		details: {
			display: 'flex',
			flexDirection: 'column',
		},
		content: {
			height: '100%',
			textAlign: 'center',
			display: 'flex',
			flexDirection: 'column',
			justifyContent: 'center',
			alignItems: 'center',
		},
		cover: {
			width: 225,
			transform: 'skewX(10deg) translateX(-17.5px)',
		},
	})
);

export default function ViewCard({ name, domain, image }: IViewCardProps) {
	const classes = useStyles();
	return (
		<>
			<Card className={classes.root}>
				<CardMedia
					className={classes.cover}
					image={image.url}
					title={image.alternativeText}
				/>
				<div className={classes.details}>
					<CardContent className={classes.content}>
						<Typography component="h5" variant="h5" style={{ fontFamily: 'Spartan' }}>
							{capitalizeEachWord(name)}
						</Typography>
						<Typography
							variant="subtitle1"
							color="textSecondary"
							style={{ fontFamily: 'Major Mono Display' }}>
							{getReadableNameFromDomainUpperCased(domain)}
						</Typography>
					</CardContent>
				</div>
			</Card>
		</>
	);
}

interface IViewCardProps {
	domain: string;
	image: DataImageType;
	name: string;
}
