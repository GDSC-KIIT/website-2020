import styles from '@/styles/navbar.module.css';

import { AppBar, Toolbar } from '@material-ui/core';

import MobileNavbar from './MobileNavbar';
import LaptopNavbar from './LaptopNavbar';

const Navbar = () => {
	return (
		<AppBar
			position="sticky"
			color="default"
			style={{
				backdropFilter: 'saturate(180%) blur(10px)',
				backgroundColor: 'rgba(255, 255, 255, 0.9)',
			}}>
			<Toolbar
				className={styles.navToolbar}
				style={{ margin: '0', height: '100%', position: 'relative' }}>
				<MobileNavbar />
				<LaptopNavbar />
			</Toolbar>
		</AppBar>
	);
};
export default Navbar;
