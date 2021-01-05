// change to PRODUCTION url during deployment

type backendUrls =
	| 'http://localhost:9000/auth/google/callback?access_token='
	| 'http://localhost:9000/users/me'
	| 'http://localhost:9000/events'
	| 'http://localhost:9000/banners';

interface IBackendUrls {
	[key: string]: backendUrls;
}

export const backendUrls: IBackendUrls = {
	auth_callback: 'http://localhost:9000/auth/google/callback?access_token=',
	user_info: 'http://localhost:9000/users/me',
	all_events: 'http://localhost:9000/events',
	all_banners: 'http://localhost:9000/banners',
};
