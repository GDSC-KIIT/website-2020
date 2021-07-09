import { getReadableNameFromDomain } from '@/lib/text';
import type { GroupedMemberType } from '@/types/index';
import TeamIntro from './TeamIntro';
import MembersUnderDomain from './MembersUnderDomain';
import styles from '@/styles/members.module.css';

export default function Members({ members }: IMembers) {
	const domains = Object.keys(members);

	return (
		<>
			<TeamIntro />
			<section>
				<div className={styles.container}>
					{domains.map((domain) => {
						const domainName = getReadableNameFromDomain(domain);
						return (
							<>
								<span
									key={domain}
									className={styles.techDesc}
									style={{ textAlign: 'center', display: 'block' }}>
									<h2>{domainName}</h2>
								</span>
								{MembersUnderDomain(members[domain], domainName)}
							</>
						);
					})}
				</div>
			</section>
		</>
	);
}

export interface IMembers {
	members: GroupedMemberType;
}
