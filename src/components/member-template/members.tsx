import styles from './members.module.css';
import { getStrapiMedia } from '../../lib/media';
import Link from 'next/link';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TwitterIcon from '@material-ui/icons/Twitter';
import GitHubIcon from '@material-ui/icons/GitHub';

const positionHeading = [
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
declare global {
	namespace JSX {
		interface IntrinsicElements {
			center: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
		}
	}
}
function Members({ memberInfo, displayHeader }: any) {
	const imageUrl = getStrapiMedia(memberInfo.image_path);

	return (
		<>
			{console.log(memberInfo, displayHeader)}
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
							<Link href={memberInfo.twitter}>
								<TwitterIcon className={` ${styles.fa} ${styles.fa_twitter}`} />
							</Link>
						) : null}
						<Link href={memberInfo.github}>
							<GitHubIcon
								style={{ fontSize: 23 }}
								className={`${styles.fa} ${styles.fa_github}`}
							/>
						</Link>
						{memberInfo.facebook ? (
							<Link href={memberInfo.facebook}>
								<FacebookIcon className={`${styles.fa} ${styles.fa_facebook}`} />
							</Link>
						) : null}
						{memberInfo.linkedIn ? (
							<Link href={memberInfo.linkedIn}>
								<LinkedInIcon
									className={`${styles.fa} ${styles.fa_linkedin_square}`}
								/>
							</Link>
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
