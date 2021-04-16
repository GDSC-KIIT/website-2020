import axios, { AxiosError } from 'axios';

import { staticBackendUrls } from '@/lib/urls';
import type { MemberDataType, GroupedMemberType } from '@/types/index';

export default function fetchMembersGrouped(): Promise<GroupedMemberType> {
	return axios
		.get(staticBackendUrls['members'])
		.then((response) => response.data)
		.then((data: Array<MemberDataType>) => getDSC_KIIT_LeadToFront(data))
		.then((arranged) => groupMembersByDomain(arranged))
		.catch((err: AxiosError) => {
			console.log('Error fetching members', err.name, '\n', err.message);
			return {};
		});
}

function groupMembersByDomain(members: Array<MemberDataType>): GroupedMemberType {
	return members.reduce((groupedObj, mem) => {
		groupedObj[mem['domain']] = [...(groupedObj[mem['domain']] || []), mem];
		return groupedObj;
	}, {});
}

function getDSC_KIIT_LeadToFront(members: MemberDataType[]): MemberDataType[] {
	const leadIndex = members.findIndex((m) => m.domain === 'DSC_KIIT_Lead');
	const newArranged = new Set([members[leadIndex], ...members]);
	return Array.from(newArranged);
}
