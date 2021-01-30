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

export interface IStrapiEvent {
	event?: eventType;
	created_at?: Date;
	model?: string;
	entry?: {
		id?: number;
	};
	media?: {
		name: string;
		url: string;
		mime: 'image/png' | 'image/jpg' | string;
	};
}
