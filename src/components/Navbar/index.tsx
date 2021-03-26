import Link from 'next/link';
import React, { useState } from 'react';
import { useRouter } from 'next/router';

import styles from '@/styles/navbar.module.css';

import {
	makeStyles,
	AppBar,
	Toolbar,
	Typography,
	Grid,
	IconButton,
	Drawer,
	List,
	ListItem,
	ListItemIcon,
	ListItemText,
	Box,
	Divider,
} from '@material-ui/core';

import {
	Group as GroupIcon,
	Menu as MenuIcon,
	Home as HomeIcon,
	Contacts as ContactsIcon,
	Info as InfoIcon,
	LibraryBooks as LibraryBooksIcon,
	Book as BookIcon,
	EmojiEvents as EmojiEventsIcon,
} from '@material-ui/icons';

import { GoogleAuthLogin } from '@/components/Navbar/AuthProvider';

const backHoverStyles = {
	backgroundColor: '#d9d9d9',
	borderRadius: '0.75rem',
	transition: 'all 0.04s linear',
};

const useStyles = makeStyles((theme) => ({
	navToggle: {
		display: 'none',
		[theme.breakpoints.down('sm')]: {
			display: 'block',
		},
	},
	divider: {
		margin: theme.spacing(0, 0.75),
	},
	backHover: {
		'&:hover': backHoverStyles,
		'&:focus': backHoverStyles,
	},
}));

const Navbar = () => {
	const [navState, navToggle] = useState(false);

	const classes = useStyles();

	return (
		<AppBar position="sticky" color="default">
			<Toolbar
				className={styles.navToolbar}
				style={{ margin: '0', height: '100%', position: 'relative' }}>
				<Box>
					<IconButton onClick={() => navToggle(true)} className={classes.navToggle}>
						<MenuIcon />
					</IconButton>
					<Drawer anchor="left" open={navState} onClose={() => navToggle(false)}>
						<List>
							<ListItem className={classes.backHover}>
								<Typography variant="h6" style={{ fontWeight: 'bolder' }}>
									DSC KIIT
									<GoogleAuthLogin />
								</Typography>
							</ListItem>

							<div className={classes.backHover}>
								<DrawerItem label="Home" icon={<HomeIcon />} link="/" />
							</div>
							<div className={classes.backHover}>
								<DrawerItem
									label="Projects"
									icon={<LibraryBooksIcon />}
									link="/projects"
								/>
							</div>
							<div className={classes.backHover}>
								<DrawerItem label="Blogs" icon={<BookIcon />} link="/blogs" />
							</div>
							<div className={classes.backHover}>
								<DrawerItem
									label="Events"
									icon={<EmojiEventsIcon />}
									link="/events"
								/>
							</div>
							<div className={classes.backHover}>
								<DrawerItem label="Teams" icon={<GroupIcon />} link="/team" />
							</div>
							<div className={classes.backHover}>
								<DrawerItem
									label="Mentors"
									icon={<ContactsIcon />}
									link="/mentors"
								/>
							</div>
							<div className={classes.backHover}>
								<DrawerItem label="Contact" icon={<InfoIcon />} link="#contact" />
							</div>
						</List>
					</Drawer>
				</Box>
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
			</Toolbar>
		</AppBar>
	);
};
export default Navbar;

interface IDrawerItemProps {
	link: string;
	icon: any;
	label: string;
}

const DrawerItem = (props: IDrawerItemProps) => {
	const router = useRouter();
	return (
		<ListItem
			style={{ width: '250px', cursor: 'pointer' }}
			onClick={() => router.push(props.link)}>
			<ListItemIcon>{props.icon ?? <MenuIcon />}</ListItemIcon>
			<ListItemText>{props.label}</ListItemText>
		</ListItem>
	);
};
