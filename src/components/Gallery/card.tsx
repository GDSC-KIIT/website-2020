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
			height: 250,
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
		},
	})
);

export default function ViewCard({ name, domain, image, index }: IViewCardProps) {
	const transform =
		index % 2 === 0 ? 'skewX(-6.5deg) translateX(-15px)' : 'skewX(6.5deg) translateX(15px)';
	const classes = useStyles();

	const CMedia = () => (
		<CardMedia
			className={classes.cover}
			image={image.url}
			title={image.alternativeText}
			style={{ transform }}
		/>
	);

	const CDetails = () => (
		<div className={classes.details}>
			<CardContent className={classes.content}>
				<Typography component="h5" variant="h5" style={{ fontFamily: 'Spartan' }}>
					{capitalizeEachWord(name)}
				</Typography>
				<Typography
					variant="subtitle1"
					color="textSecondary"
					style={{ fontFamily: 'Heebo' }}>
					{getReadableNameFromDomainUpperCased(domain)}
				</Typography>
			</CardContent>
		</div>
	);

	return (
		<>
			<Card className={classes.root}>
				{index % 2 === 0 ? (
					<>
						<CMedia />
						<CDetails />
					</>
				) : (
					<>
						<CDetails />
						<CMedia />
					</>
				)}
			</Card>
		</>
	);
}

interface IViewCardProps {
	domain: string;
	image: DataImageType;
	name: string;
	index: number;
}
