import type { ReactNode } from 'react';

import type { MemberDataType } from '@/types/index';

import { Tooltip, Grid } from '@material-ui/core';
import {
	GitHub as GitHubIcon,
	Twitter as TwitterIcon,
	Language as LanguageIcon,
	LinkedIn as LinkedInIcon,
	Facebook as FacebookIcon,
} from '@material-ui/icons';

import styles from '@/styles/memberCard.module.css';
import Searchable from '../Searchable';

const IconMap: IconMapType = {
	github: <GitHubIcon style={{ color: 'black' }} />,
	twitter: <TwitterIcon style={{ color: 'teal' }} />,
	website: <LanguageIcon style={{ color: 'green' }} />,
	linkedin: <LinkedInIcon style={{ color: 'lightblue' }} />,
	facebook: <FacebookIcon style={{ color: 'blue' }} />,
};

export default function MembersUnderDomain(members: Array<MemberDataType>) {
	return members.map((member) => (
		<Grid item key={member.id}>
			<Searchable name={member.name}>
				<Card member={member} key={member.id} />
			</Searchable>
		</Grid>
	));
}

function Card({ member }: ICard) {
	return (
		<div className={styles.item}>
			<div className={styles.card} style={{ backgroundImage: `url(${member.image.url}` }}>
				<div className={styles.border}>
					<h2 className={styles.heading}>{member.name}</h2>
					<div className={styles.icons}>
						<Links member={member} />
					</div>
				</div>
			</div>
		</div>
	);
}

function Links({ member: { facebook, github, linkedin, twitter, website } }: ILinksProps) {
	return (
		<>
			{twitter && <IconLink title="twitter" link={twitter} />}
			{github && <IconLink title="github" link={github} />}
			{linkedin && <IconLink title="linkedin" link={linkedin} />}
			{facebook && <IconLink title="facebook" link={facebook} />}
			{website && <IconLink title="website" link={website} />}
		</>
	);
}

function IconLink({ title, link }: IIconLinkProps) {
	return (
		<a href={link} rel="noreferrer noopener" target="_blank">
			<Tooltip title={title.toUpperCase()} placement="right">
				<div className={styles.icon}>{IconMap[title]}</div>
			</Tooltip>
		</a>
	);
}

interface ICard {
	member: MemberDataType;
}

interface ILinksProps {
	member: MemberDataType;
}

interface IIconLinkProps {
	title: 'github' | 'twitter' | 'website' | 'facebook' | 'linkedin';
	link: string;
}

type IconMapType = Record<IIconLinkProps['title'], ReactNode>;
