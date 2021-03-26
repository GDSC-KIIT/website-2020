import NextLink from 'next/link';
import NextImage from 'next/image';

import { GoogleAuthLogin } from '@/components/Navbar/AuthProvider';
import { externalUrls } from '@/lib/urls';

import { makeStyles, Typography, Box, Grid, Divider, Link } from '@material-ui/core';
import styles from '@/styles/navbar.module.css';

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
				<NextLink href="/">
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
					<NextLink href="/team">
						<Typography variant="body2" style={{ cursor: 'pointer' }}>
							Team
						</Typography>
					</NextLink>
				</Grid>
				<Grid item className={classes.backHover}>
					<NextLink href="/projects">
						<Typography variant="body2" style={{ cursor: 'pointer' }}>
							Projects
						</Typography>
					</NextLink>
				</Grid>
				<Grid item className={classes.backHover}>
					<Link href={externalUrls.events_page} target="_blank" rel="noopener noreferrer">
						<Typography variant="body2" style={{ cursor: 'pointer' }}>
							Events
						</Typography>
					</Link>
				</Grid>
				<Grid item className={classes.backHover}>
					<NextLink href="/playground">
						<Typography variant="body2" style={{ cursor: 'pointer' }}>
							Quiz
						</Typography>
					</NextLink>
				</Grid>
				<Grid item className={classes.backHover}>
					<NextLink href="/blog">
						<Typography variant="body2" style={{ cursor: 'pointer' }}>
							Blogs
						</Typography>
					</NextLink>
				</Grid>
				<Grid item className={classes.backHover}>
					<NextLink href="/mentors">
						<Typography variant="body2" style={{ cursor: 'pointer' }}>
							Mentors
						</Typography>
					</NextLink>
				</Grid>
				<Grid item className={classes.backHover}>
					<NextLink href="#contact">
						<Typography variant="body2" style={{ cursor: 'pointer' }}>
							Contact
						</Typography>
					</NextLink>
				</Grid>
				<Divider className={classes.divider} orientation="vertical" flexItem />
				<Grid item className={classes.backHover}>
					<GoogleAuthLogin />
				</Grid>
			</Grid>
		</Grid>
	);
}