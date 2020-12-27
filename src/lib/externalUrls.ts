type blogUrls =
	| 'https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/dsckiit'
	| 'https://dev.to/api/articles?username=dsckiitdev';

interface IExternalUrls {
	[key: string]: blogUrls;
}

export const externalUrls: IExternalUrls = {
	blogs_medium: 'https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/dsckiit',
	blogs_devto: 'https://dev.to/api/articles?username=dsckiitdev',
};
