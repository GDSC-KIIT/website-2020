import NextLink from 'next/link';
import { useState } from 'react';

import { GoogleAuthLogin } from '@/components/Navbar/AuthProvider';
import { externalUrls } from '@/lib/urls';

import {
	makeStyles,
	Typography,
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
	backHover: {
		'&:hover': backHoverStyles,
		'&:focus': backHoverStyles,
	},
}));

export default function MobileNavbar() {
	const [navState, navToggle] = useState(false);

	const classes = useStyles();

	return (
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
						<DrawerItem label="Projects" icon={<LibraryBooksIcon />} link="/projects" />
					</div>
					<div className={classes.backHover}>
						<DrawerItem label="Blogs" icon={<BookIcon />} link="/blogs" />
					</div>
					<div className={classes.backHover}>
						<DrawerItem
							label="Events"
							icon={<EmojiEventsIcon />}
							link={externalUrls.events_page}
						/>
					</div>
					<div className={classes.backHover}>
						<DrawerItem label="Teams" icon={<GroupIcon />} link="/team" />
					</div>
					<div className={classes.backHover}>
						<DrawerItem label="Mentors" icon={<ContactsIcon />} link="/mentors" />
					</div>
					<div className={classes.backHover}>
						<DrawerItem label="Contact" icon={<InfoIcon />} link="#contact" />
					</div>
				</List>
			</Drawer>
		</Box>
	);
}

const DrawerItem = (props: IDrawerItemProps) => {
	return (
		<NextLink href={props.link}>
			<ListItem style={{ width: '250px', cursor: 'pointer' }}>
				<ListItemIcon>{props.icon ?? <MenuIcon />}</ListItemIcon>
				<ListItemText>{props.label}</ListItemText>
			</ListItem>
		</NextLink>
	);
};

interface IDrawerItemProps {
	link: string;
	icon: any;
	label: string;
}
