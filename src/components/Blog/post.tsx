// import ShortenText from '../utils/ShortenText';
// import ToText from '../utils/ToText';
// import { faUser, faCalendarAlt } from '@fortawesome/free-solid-svg-icons';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	makeStyles,
	Card,
	CardMedia,
	CardContent,
	Typography,
	Grid,
	Link,
	CardActions,
	Divider,
} from '@material-ui/core';
import { Person as PersonIcon, CalendarToday as CalendarTodayIcon } from '@material-ui/icons';

import type { BlogPostType } from '@/types/index';

const styles = makeStyles((muiBaseTheme) => ({
	grid: {
		marginTop: '20px',
		minHeight: '391px',
	},
	card: {
		minWidth: 0,
		marginLeft: '15px',
		marginRight: '15px',
		margin: 'auto',
		transition: '0.3s',
		minHeight: '391px',
		borderRadius: '.625rem!important',
		boxShadow: '0 8px 40px -12px rgba(0,0,0,0.3)',
		'&:hover': {
			boxShadow: '0 16px 70px -12.125px rgba(0,0,0,0.3)',
		},
	},
	media: {
		minHeight: '10rem',
		position: 'relative',
	},
	content: {
		textAlign: 'left',
		padding: muiBaseTheme.spacing(3),
	},
	divider: {
		margin: `${muiBaseTheme.spacing(2)}px 0`,
	},
	heading: {
		fontSize: '16px',
		fontWeight: 'bold',
		color: '#3d5170',
		'&::hover': {
			color: '#2b394f',
		},
	},
	subheading: {
		fontSize: '14px',
		lineHeight: 1.8,
	},
}));

export default function SingleBlogCard({ post }: ISingleBlogPostProps) {
	const classes = styles();
	//   const monthShortname = [
	//     "Jan",
	//     "Feb",
	//     "Mar",
	//     "Apr",
	//     "May",
	//     "Jun",
	//     "Jul",
	//     "Aug",
	//     "Sep",
	//     "Oct",
	//     "Nov",
	//     "Dec",
	//   ];
	//   const splitDate = props.pubDate.split(" ");
	//   const date = splitDate[0];
	//   const splitMonth = date.split("-");
	//   const finalDate =
	//     monthShortname[Number(splitMonth[1] - 1)] +
	//     " " +
	//     splitMonth[2] +
	//     "," +
	//     " " +
	//     splitMonth[0];
	//   const d = new Date();

	return (
		<Grid xs={12} sm={12} lg={4} className={classes.grid}>
			<Link
				href={post.link}
				target="_blank"
				rel="noopener noreferrer"
				underline="none"
				style={{ textDecoration: 'none' }}>
				<Card className={classes.card}>
					<CardMedia className={classes.media} image={post.image} />
					<CardContent
						className={classes.content}
						style={{
							paddingTop: '2.1875rem',
							minHeight: '120px',
							paddingBottom: '0',
						}}>
						<Typography className={classes.heading} variant={'h5'} gutterBottom>
							{post.title}
						</Typography>
						<Typography className={classes.subheading} variant="body1">
							{getReadableCategories(post.categories)}
						</Typography>
					</CardContent>
					<Divider className={classes.divider} />
					<CardActions style={{ paddingLeft: '1.5625rem', paddingRight: '1.5625rem' }}>
						<Grid container justify="space-between">
							<Grid item>
								<PersonIcon />
								<Typography
									style={{
										fontSize: '14px',
										color: '#212529',
									}}
									display="block"
									variant="body1"
									gutterBottom>
									{post.author}
								</Typography>
							</Grid>
							<Grid item>
								<CalendarTodayIcon />
								<Typography
									display="block"
									variant="body1"
									style={{
										fontSize: '14px',
										color: '#868e96',
									}}
									gutterBottom>
									{post.date}
								</Typography>
							</Grid>
						</Grid>
					</CardActions>
				</Card>
			</Link>
		</Grid>
	);
}

function getReadableCategories(categories: string[]) {
	return Array.isArray(categories)
		? categories.map((catg) => ' ' + catg.charAt(0).toUpperCase() + catg.slice(1)).toString()
		: categories;
}

interface ISingleBlogPostProps {
	post: BlogPostType;
}
