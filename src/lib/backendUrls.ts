// change to PRODUCTION url during deployment

type backendUrls =
	| 'http://localhost:9000/auth/google/callback?access_token='
	| 'http://localhost:9000/users/me'
	| 'http://localhost:9000/events'
	| 'http://localhost:9000/banners'
	| 'http://localhost:9000/connect/google'
	| 'http://localhost:9000/scores/'
	| 'http://localhost:9000/season-score/';

interface IBackendUrls {
	[key: string]: backendUrls;
}

export const backendUrls: IBackendUrls = {
	auth_callback: 'http://localhost:9000/auth/google/callback?access_token=',
	login_google: 'http://localhost:9000/connect/google',
	user_info: 'http://localhost:9000/users/me',
	user_score: 'http://localhost:9000/scores/',
	all_events: 'http://localhost:9000/events',
	all_banners: 'http://localhost:9000/banners',
	season_score: 'http://localhost:9000/season-score/',
};
