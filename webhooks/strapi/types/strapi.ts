type eventType =
	| 'trigger-test'
	| 'entry.create'
	| 'entry.update'
	| 'entry.delete'
	| 'entry.publish'
	| 'entry.unpublish'
	| 'media.create'
	| 'media.update'
	| 'media.delete';

export interface IStrapiHeader {
	'x-strapi-event': eventType;
	host: string;
}

type entryType = {
	id: number;
	created_at: string;
	updated_at: string;
	[key: string]: any;
};

type mediaType = {
	id: number;
	name: string;
	url: string;
	mime: 'image/png' | 'image/jpg' | string;
	[key: string]: any;
};

export interface IStrapiEvent {
	event?: eventType;
	created_at?: string;
	model?: string;
	entry?: entryType | entryType[];
	media?: mediaType | mediaType[];
}
