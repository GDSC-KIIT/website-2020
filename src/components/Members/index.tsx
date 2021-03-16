import {
	Facebook as FacebookIcon,
	LinkedIn as LinkedInIcon,
	Twitter as TwitterIcon,
	GitHub as GitHubIcon,
} from '@material-ui/icons';

import type { GroupedMemberType, MemberDataType } from '@/types/index';

import styles from '@/styles/members.module.css';

export default function Members({ members }: IMembers) {
	const domains = Object.keys(members);

	return (
		<>
			{domains.map((domain) => (
				<div key={domain}>
					{
						<>
							<center className={styles.techDesc}>
								<h3>{getReadableNameFromDomain(domain)}</h3>
							</center>
							{displayMembersUnderDomain(members[domain])}
						</>
					}
				</div>
			))}
		</>
	);
}

function displayMembersUnderDomain(members: Array<MemberDataType>) {
	return members.map((member) => (
		<div className={`${styles.member} `} key={member.id}>
			<div className={styles.imageWrap}>
				<img src={member.image.url} alt="Member photo" />
			</div>
			<div className={styles.info}>
				<span className={styles.school}>{member.name}</span>
				<span className={styles.state}>
					{member.twitter ? (
						<a href={member.twitter} target="_blank">
							<TwitterIcon className={` ${styles.fa} ${styles.fa_twitter}`} />
						</a>
					) : null}
					<a href={member.github} target="_blank">
						<GitHubIcon
							style={{ fontSize: 23 }}
							className={`${styles.fa} ${styles.fa_github}`}
						/>
					</a>
					{member.facebook ? (
						<a href={member.facebook} target="_blank">
							<FacebookIcon className={`${styles.fa} ${styles.fa_facebook}`} />
						</a>
					) : null}
					{member.linkedin ? (
						<a href={member.linkedin} target="_blank">
							<LinkedInIcon className={`${styles.fa} ${styles.fa_linkedin_square}`} />
						</a>
					) : null}
				</span>
			</div>
			<div className={styles.teamInfo}>
				<h3>{member.name}</h3>
				<span>{getReadableNameFromDomain(member.domain)}</span>
			</div>
		</div>
	));
}

function getReadableNameFromDomain(domain: string): string {
	return domain
		.split('_')
		.map((word) => word.charAt(0).toUpperCase() + word.slice(1))
		.join(' ');
}

export interface IMembers {
	members: GroupedMemberType;
}
