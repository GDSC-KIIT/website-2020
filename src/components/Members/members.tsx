import { getStrapiMedia } from '../../lib/media';

import {
	Facebook as FacebookIcon,
	LinkedIn as LinkedInIcon,
	Twitter as TwitterIcon,
	GitHub as GitHubIcon,
} from '@material-ui/icons';

import styles from '@/styles/members.module.css';

const positionHeading: string[] = [
	'DSC KIIT LEAD',
	'Web Development',
	'Machine Learning',
	'Android and Flutter',
	'Cloud and Network Security',
	'Photography and Videography',
	'Management',
	'UI/UX and Design',
	'Content Writing',
	'3D Modelling',
];

type member = {
	id: string;
	name: string;
	position: string;
	image_path: string;
	twitter: string;
	github: string;
	linkedIn: string;
	facebook: string;
	order: number;
};
function Members({ memberInfo, displayHeader }: { memberInfo: member; displayHeader: boolean }) {
	const imageUrl = getStrapiMedia(memberInfo.image_path);

	return (
		<>
			{/* {console.log(memberInfo, displayHeader)} */}
			{displayHeader ? (
				<center className={styles.techDesc}>
					<h3>{positionHeading[memberInfo.order]}</h3>
				</center>
			) : (
				''
			)}
			<div className={`${styles.member} `}>
				<div className={styles.imageWrap}>
					<img src={imageUrl} alt="Member photo" />
				</div>
				<div className={styles.info}>
					<span className={styles.school}>{memberInfo.name}</span>
					<span className={styles.state}>
						{memberInfo.twitter ? (
							<a href={memberInfo.twitter} target="_blank">
								<TwitterIcon className={` ${styles.fa} ${styles.fa_twitter}`} />
							</a>
						) : null}
						<a href={memberInfo.github} target="_blank">
							<GitHubIcon
								style={{ fontSize: 23 }}
								className={`${styles.fa} ${styles.fa_github}`}
							/>
						</a>
						{memberInfo.facebook ? (
							<a href={memberInfo.facebook} target="_blank">
								<FacebookIcon className={`${styles.fa} ${styles.fa_facebook}`} />
							</a>
						) : null}
						{memberInfo.linkedIn ? (
							<a href={memberInfo.linkedIn} target="_blank">
								<LinkedInIcon
									className={`${styles.fa} ${styles.fa_linkedin_square}`}
								/>
							</a>
						) : null}
					</span>
				</div>

				<div className={styles.teamInfo}>
					<h3>{memberInfo.name}</h3>
					<span>{memberInfo.position}</span>
				</div>
			</div>
		</>
	);
}

export default Members;
