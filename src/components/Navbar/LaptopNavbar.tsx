import Link from 'next/link';

import { GoogleAuthLogin } from '@/components/Navbar/AuthProvider';

import { makeStyles, Typography, Grid, Divider } from '@material-ui/core';
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
}));

export default function LaptopNavbar() {
	const classes = useStyles();

	return (
		<Grid container>
			<Grid item xs={12} sm={5} style={{ display: 'flex', alignItems: 'center' }}>
				<Link href="/">
					<Typography
						variant="h6"
						style={{ cursor: 'pointer', marginLeft: '.4em' }}
						noWrap>
						<img
							src="/images/playground/dsc.svg"
							style={{ marginRight: '10px', width: '1.5em' }}
						/>
						DSC KIIT
					</Typography>
				</Link>
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
					<Link href="/team">
						<Typography variant="body2" style={{ cursor: 'pointer' }}>
							Team
						</Typography>
					</Link>
				</Grid>
				<Grid item className={classes.backHover}>
					<Link href="/projects">
						<Typography variant="body2" style={{ cursor: 'pointer' }}>
							Projects
						</Typography>
					</Link>
				</Grid>
				<Grid item className={classes.backHover}>
					<Link href="https://dsc.community.dev/kalinga-institute-of-industrial-technology-bhubaneswar/">
						<Typography variant="body2" style={{ cursor: 'pointer' }}>
							Events
						</Typography>
					</Link>
				</Grid>
				<Grid item className={classes.backHover}>
					<Link href="/playground">
						<Typography variant="body2" style={{ cursor: 'pointer' }}>
							Quiz
						</Typography>
					</Link>
				</Grid>
				<Grid item className={classes.backHover}>
					<Link href="/blog">
						<Typography variant="body2" style={{ cursor: 'pointer' }}>
							Blogs
						</Typography>
					</Link>
				</Grid>
				<Grid item className={classes.backHover}>
					<Link href="/mentors">
						<Typography variant="body2" style={{ cursor: 'pointer' }}>
							Mentors
						</Typography>
					</Link>
				</Grid>
				<Grid item className={classes.backHover}>
					<Link href="#contact">
						<Typography variant="body2" style={{ cursor: 'pointer' }}>
							Contact
						</Typography>
					</Link>
				</Grid>
				<Divider className={classes.divider} orientation="vertical" flexItem />
				<Grid item className={classes.backHover}>
					<GoogleAuthLogin />
				</Grid>
			</Grid>
		</Grid>
	);
}
