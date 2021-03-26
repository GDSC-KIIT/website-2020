import { Timeline } from 'react-twitter-widgets';
import styles from './Footer.module.css';
import { makeStyles, Grid } from '@material-ui/core';

import {
	Facebook as FacebookIcon,
	Twitter as TwitterIcon,
	LinkedIn as LinkedInIcon,
	Instagram as InstagramIcon,
	LocationOnOutlined as LocationOnOutlinedIcon,
	EmailOutlined as EmailOutlinedIcon,
	PhoneEnabled as PhoneEnabledIcon,
} from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
	},
	alongIcon: {
		margin: theme.spacing(1.5, 0),
		display: 'flex',
		flexDirection: 'row',
	},
}));

export default function Home() {
	const classes = useStyles();
	return (
		<>
			<footer
				className={`${styles.new_footer_area} ${styles.bg_color} ${classes.root}`}
				id="contact">
				<div className={styles.new_footer_top}>
					<Grid container spacing={4}>
						<Grid item lg={4} md={6}>
							<div
								className={`${styles.f_widget} ${styles.company_widget} ${styles.wow} ${styles.fadeInLeft}`}
								data-wow-delay="0.2s">
								<img
									src="https://ik.imagekit.io/xvvhd5ujib/dsckiit_logo_colour_EB_wc01at.svg"
									className={styles.dsc_logo}
									alt="DSC Logo"
								/>
								<div className={styles.twitter_timeline}>
									<Timeline
										dataSource={{
											sourceType: 'profile',
											screenName: 'DscKiit',
										}}
										options={{
											theme: 'dark',
											width: '500',
											height: '300',
										}}
									/>
								</div>
							</div>
						</Grid>

						<Grid item lg={2} md={6}>
							<div
								className={`${styles.f_widget} ${styles.about_widget} ${styles.pl_70} ${styles.wow} ${styles.fadeInLeft}`}
								data-wow-delay="0.4s">
								<h3
									className={`${styles.f_title} ${styles.f_600}  ${styles.f_size_18}`}>
									General Guidelines
								</h3>
								<ul className={`${styles.list_unstyled} ${styles.f_list} `}>
									<li>
										<a href="#">Code of Conduct</a>
									</li>
								</ul>
							</div>
						</Grid>
						<Grid item lg={3} md={6}>
							<div
								className={`${styles.f_widget} ${styles.about_widget} ${styles.pl_70} ${styles.wow} ${styles.fadeInLeft}`}
								data-wow-delay="0.6s">
								<h3
									className={`${styles.f_title} ${styles.f_600}  ${styles.f_size_18}`}>
									Google Dvelopers
								</h3>
								<ul className={`${styles.list_unstyled} ${styles.f_list} `}>
									<li>
										<a href="#">Google Developers Program</a>
									</li>
									<li>
										<a href="#">Developer Student Clubs</a>
									</li>
									<li>
										<a href="#">Tech Includes</a>
									</li>
								</ul>
							</div>
						</Grid>

						<Grid item lg={3} md={6}>
							<div
								className={`${styles.f_widget} ${styles.social_widget} ${styles.pl_70} ${styles.wow} ${styles.fadeInLeft}`}
								data-wow-delay="0.8s">
								<h3
									className={`${styles.f_title} ${styles.f_600}  ${styles.f_size_18}`}>
									Feel free to contact us
								</h3>

								<ul className={styles.dsc_info}>
									<li className={classes.alongIcon}>
										<LocationOnOutlinedIcon style={{ fontSize: 20 }} />
										&nbsp; School of Computer Engineering, KIIT University,
										Bhubaneswar, 751024
									</li>
									<li className={classes.alongIcon}>
										<EmailOutlinedIcon style={{ fontSize: 20 }} />{' '}
										&nbsp;Email:&nbsp;
										<a href="mailto:dsckiit@gmail.com">dsckiit@gmail.com</a>
									</li>
									<li className={classes.alongIcon}>
										<PhoneEnabledIcon style={{ fontSize: 20 }} />{' '}
										&nbsp;Phone:&nbsp;
										<div>
											<a href="tel:+91-9956876609">+919956876609</a>
											<br />
											(Praddyum Verma)
										</div>
									</li>
								</ul>
								<div className={styles.f_social_icon}>
									<a href="https://www.facebook.com/dsckiit/" target="_blank">
										<FacebookIcon />
									</a>
									<a href="https://twitter.com/DscKiit" target="_blank">
										<TwitterIcon />
									</a>
									<a
										href="https://www.linkedin.com/company/dsckiit/"
										target="_blank">
										<LinkedInIcon />
									</a>
									<a href="https://www.instagram.com/dsckiit/" target="_blank">
										<InstagramIcon />
									</a>
								</div>
							</div>
						</Grid>
					</Grid>

					<div className={styles.footer_bg}>
						<div className={styles.footer_bg_one}></div>
						<div className={styles.footer_bg_two}></div>
					</div>
				</div>
			</footer>
		</>
	);
}
