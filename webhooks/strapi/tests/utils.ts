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

export const strapiEntryPayloadMany = {
	event: 'entry.delete',
	model: 'address',
	entry: [
		{
			id: 1,
			geolocation: {},
			city: 'Paris',
			postal_code: null,
			category: null,
			full_name: 'Paris',
			created_at: '2020-01-10T08:47:36.264Z',
			updated_at: '2020-01-10T08:58:26.210Z',
			cover: null,
			images: [],
		},
		{
			id: 2,
			geolocation: {},
			city: 'Rome',
			postal_code: null,
			category: null,
			full_name: 'Paris',
			created_at: '2020-01-10T08:47:36.264Z',
			updated_at: '2020-01-10T08:58:26.210Z',
			cover: null,
			images: [],
		},
	],
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

export const strapiMediaPayloadMany = {
	event: 'media.update',
	created_at: '2020-01-10T10:58:41.115Z',
	media: [
		{
			id: 1,
			name: 'image.png',
			hash: '353fc98a19e44da9acf61d71b11895f9',
			sha256: 'huGUaFJhmcZRHLcxeQNKblh53vtSUXYaB16WSOe0Bdc',
			ext: '.png',
			mime: 'image/png',
			size: 228.19,
			url: '/uploads/353fc98a19e44da9acf61d71b11895f9.png',
			provider: 'local',
			provider_metadata: null,
			created_at: '2020-01-10T10:58:41.095Z',
			updated_at: '2020-01-10T10:58:41.095Z',
			related: [],
		},
		{
			id: 2,
			name: 'image-another.png',
			hash: '353fc98a19e44da9acf61d7895f9',
			sha256: 'huGUaFJhmcZRHLcxeQNKblh53vtSUXWSOe0Bdc',
			ext: '.png',
			mime: 'image/png',
			size: 228.0,
			url: '/uploads/353fc98a19e44da9acf61d7195f9.png',
			provider: 'local',
			provider_metadata: null,
			created_at: '2020-01-10T10:58:41.015Z',
			updated_at: '2020-01-10T10:58:41.005Z',
			related: [],
		},
	],
};

export const isWordInString = (word: string, sentence: string): boolean => {
	return sentence.split(' ').some((w) => {
		const newW = w.replace(/[|\\{}()[\]^$+*?.]/g, '\\$&');
		const wExp = new RegExp(newW, 'gi');
		return wExp.test(word);
	});
};
