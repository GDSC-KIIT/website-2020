const CMS_STRAPI_URL = '/backend';

export const backendUrls = {
	auth_callback: CMS_STRAPI_URL + '/auth/google/callback?access_token=',
	login_google: CMS_STRAPI_URL + '/connect/google',
	user_info: CMS_STRAPI_URL + '/users/me',
	user_score: CMS_STRAPI_URL + '/scores',
	all_events: CMS_STRAPI_URL + '/events',
	all_banners: CMS_STRAPI_URL + '/banners',
	badges: CMS_STRAPI_URL + '/badges',
	season_score: CMS_STRAPI_URL + '/season-score',
	members: CMS_STRAPI_URL + '/members',
	projects: CMS_STRAPI_URL + '/projects',
};
