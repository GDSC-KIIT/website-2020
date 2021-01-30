import { IStrapiEvent } from '../types/strapi';

export const strapiEntryPayload: IStrapiEvent = {
	event: 'entry.create',
	created_at: '2020-01-10T08:47:36.649Z',
	model: 'address',
	entry: {
		id: 1,
		city: 'Paris',
		postal_code: null,
		category: null,
		full_name: 'Paris',
		created_at: '2020-01-10T08:47:36.264Z',
		updated_at: '2020-01-10T08:47:36.264Z',
		cover: null,
		images: [],
	},
};

export const strapiMediaPayload: IStrapiEvent = {
	event: 'media.delete',
	created_at: '2020-01-10T11:02:46.232Z',
	media: {
		id: 11,
		name: 'photo.png',
		hash: '43761478513a4c47a5fd4a03178cfccb',
		sha256: 'HrpDOKLFoSocilA6B0_icA9XXTSPR9heekt2SsHTZZE',
		ext: '.png',
		mime: 'image/png',
		size: 4947.76,
		url: '/uploads/43761478513a4c47a5fd4a03178cfccb.png',
		provider: 'local',
		provider_metadata: null,
		created_at: '2020-01-07T19:34:32.168Z',
		updated_at: '2020-01-07T19:34:32.168Z',
		related: [],
	},
};
