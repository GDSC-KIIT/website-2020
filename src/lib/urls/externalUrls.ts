/**
 * @file This contains all the external links such as the **events page** and the links where the `blogPosts` are fetched from
 */

enum externalName {
	events_page = 'events_page',
	blogs_medium = 'blogs_medium',
	blogs_devto = 'blogs_devto',
	search = 'search',
}

export const externalUrls: Record<externalName, string> = {
	events_page:
		'https://dsc.community.dev/kalinga-institute-of-industrial-technology-bhubaneswar/',
	blogs_medium: 'https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/dsckiit',
	blogs_devto: 'https://dev.to/api/articles?username=dsckiitdev',
	// search: 'http://127.0.0.1:8787/',
	search: 'https://search.dscprod2.workers.dev/',
};
