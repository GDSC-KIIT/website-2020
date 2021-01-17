import Link from 'next/link';
import React, { useState } from 'react';
import { useRouter } from 'next/router';

import styles from './navbar.module.css';
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

import { GoogleAuthLogin } from '@/components/AuthProvider';

const useStyles = makeStyles((theme) => ({
	navToggle: {
		display: 'none',
		[theme.breakpoints.down('sm')]: {
			display: 'block',
		},
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
							<ListItem>
								<Typography variant="h6" style={{ fontWeight: 'bolder' }}>
									DSC KIIT
									<GoogleAuthLogin />
								</Typography>
							</ListItem>

							<DrawerItem label="Home" icon={<HomeIcon />} link="/" />
							<DrawerItem
								label="Projects"
								icon={<LibraryBooksIcon />}
								link="/projects"
							/>
							<DrawerItem label="Blogs" icon={<BookIcon />} link="/blogs" />
							<DrawerItem label="Events" icon={<EmojiEventsIcon />} link="/events" />
							<DrawerItem label="Teams" icon={<GroupIcon />} link="/team" />
							<DrawerItem label="Mentors" icon={<ContactsIcon />} link="/mentors" />
							<DrawerItem label="Contact" icon={<InfoIcon />} link="/contact" />
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
									src="/dsc.svg"
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
						<Grid item>
							<Link href="/team">
								<Typography variant="body2" style={{ cursor: 'pointer' }}>
									Team
								</Typography>
							</Link>
						</Grid>
						<Grid item>
							<Link href="/projects">
								<Typography variant="body2" style={{ cursor: 'pointer' }}>
									Projects
								</Typography>
							</Link>
						</Grid>
						<Grid item>
							<Link href="https://dsc.community.dev/kalinga-institute-of-industrial-technology-bhubaneswar/">
								<Typography variant="body2" style={{ cursor: 'pointer' }}>
									Events
								</Typography>
							</Link>
						</Grid>
						<Grid item>
							<Link href="/playground">
								<Typography variant="body2" style={{ cursor: 'pointer' }}>
									Quiz
								</Typography>
							</Link>
						</Grid>
						<Grid item>
							<Link href="/blog">
								<Typography variant="body2" style={{ cursor: 'pointer' }}>
									Blogs
								</Typography>
							</Link>
						</Grid>
						<Grid item>
							<Link href="/mentors">
								<Typography variant="body2" style={{ cursor: 'pointer' }}>
									Mentors
								</Typography>
							</Link>
						</Grid>
						<Grid item>
							<Link href="/contact">
								<Typography variant="body2" style={{ cursor: 'pointer' }}>
									Contact
								</Typography>
							</Link>
						</Grid>
						<Grid item>
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
