import NextLink from 'next/link';
import NextImage from 'next/image';
import dynamic from 'next/dynamic';

// import { GoogleAuthLogin } from '@/components/Navbar/AuthProvider';
import { externalUrls, internalUrls } from '@/lib/urls';

import { makeStyles, Typography, Box, Grid, Link } from '@material-ui/core';
import styles from '@/styles/navbar.module.css';
import CallMadeIcon from '@material-ui/icons/CallMade';
const SearchBar = dynamic(() => import('@/components/Navbar/SearchBar'), { ssr: false });

const backHoverStyles = {
	backgroundColor: '#d9d9d9',
	borderRadius: '0.75rem',
	transition: 'all 0.04s linear',
};

const useStyles = makeStyles((theme) => ({
	divider: {
		margin: theme.spacing(0, 0.75),
	},
	backHover: {
		'&:hover': backHoverStyles,
		'&:focus': backHoverStyles,
	},
	logoBox: {
		display: 'flex',
	},
	logoText: {
		marginLeft: '10px',
	},
}));

export default function LaptopNavbar() {
	const classes = useStyles();

	return (
		<Grid container>
			<Grid item xs={12} sm={5} style={{ display: 'flex', alignItems: 'center' }}>
				<NextLink href={internalUrls.home}>
					<Typography
						variant="h6"
						style={{ cursor: 'pointer', marginLeft: '.4em' }}
						noWrap>
						<Box className={classes.logoBox}>
							<NextImage width="30" height="30" src="/images/playground/dsc.svg" />
							<Box className={classes.logoText}>DSC KIIT</Box>
						</Box>
					</Typography>
				</NextLink>
				<SearchBar />
			</Grid>

			<Grid
				item
				xs={7}
				container
				alignItems="center"
				spacing={3}
				justify="flex-end"
				className={styles.nav}>
				<Grid item className={classes.backHover}>
					<NextLink href={internalUrls.team}>
						<Typography variant="body2" style={{ cursor: 'pointer' }}>
							Team
						</Typography>
					</NextLink>
				</Grid>
				<Grid item className={classes.backHover}>
					<NextLink href={internalUrls.projects}>
						<Typography variant="body2" style={{ cursor: 'pointer' }}>
							Projects
						</Typography>
					</NextLink>
				</Grid>
				<Grid item className={classes.backHover}>
					<Link href={externalUrls.events_page} target="_blank" rel="noopener noreferrer">
						<Typography variant="body2" style={{ cursor: 'pointer' }}>
							Events
							<CallMadeIcon style={{ height: '13px' }} />
						</Typography>
					</Link>
				</Grid>
				{/* // TODO the quiz page
					//  labels: to-be-discussed
				<Grid item className={classes.backHover}>
					<NextLink href={internalUrls.playground}>
						<Typography variant="body2" style={{ cursor: 'pointer' }}>
							Quiz
						</Typography>
					</NextLink>
				</Grid> 
				*/}
				<Grid item className={classes.backHover}>
					<NextLink href={internalUrls.blogs}>
						<Typography variant="body2" style={{ cursor: 'pointer' }}>
							Blogs
						</Typography>
					</NextLink>
				</Grid>
				<Grid item className={classes.backHover}>
					<NextLink href={internalUrls.mentors}>
						<Typography variant="body2" style={{ cursor: 'pointer' }}>
							Mentors
						</Typography>
					</NextLink>
				</Grid>
				<Grid item className={classes.backHover}>
					<NextLink href={internalUrls.contactUs}>
						<Typography variant="body2" style={{ cursor: 'pointer' }}>
							Contact
						</Typography>
					</NextLink>
				</Grid>
				{/* <Divider className={classes.divider} orientation="vertical" flexItem />
				<Grid item className={classes.backHover}>
					<GoogleAuthLogin />
				</Grid> */}
			</Grid>
		</Grid>
	);
}
