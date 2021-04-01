const proxyUrl = '/backend';
// can be proxied in the browser
export const backendUrls = {
	auth_callback: proxyUrl + '/auth/google/callback?access_token=',
	login_google: proxyUrl + '/connect/google',
	user_info: proxyUrl + '/users/me',
	user_score: proxyUrl + '/scores',
	all_banners: proxyUrl + '/banners',
	badges: proxyUrl + '/badges',
	season_score: proxyUrl + '/season-score',
	members: proxyUrl + '/members',
	projects: proxyUrl + '/projects',
	// playground
	scores: proxyUrl + '/scores',
	quizzes: proxyUrl + '/quizzes',
};

const CMS_STRAPI_URL = process.env.NEXT_PUBLIC_CMS_STRAPI ?? 'http://localhost:9000';
// cannot be proxied in nextjs server
export const staticBackendUrls = {
	auth_callback: CMS_STRAPI_URL + '/auth/google/callback?access_token=',
	login_google: CMS_STRAPI_URL + '/connect/google',
	user_info: CMS_STRAPI_URL + '/users/me',
	members: CMS_STRAPI_URL + '/members',
	projects: CMS_STRAPI_URL + '/projects',
};
