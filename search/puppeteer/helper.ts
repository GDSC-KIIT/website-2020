import { Page } from 'puppeteer';
import { xml2json } from 'xml-js';

const isProduction = process.env.NODE_ENV?.toUpperCase() === 'PRODUCTION';

const fallBackPages = ['/', '/team', '/mentors', '/blog'];

export const baseURL = isProduction ? 'https://dsckiit.in' : 'http://localhost:3333';

export const isHeadless = isProduction;

export const searchableDivSelector = 'div[data-search]';

export const searchableSpanSelector = 'span[data-search-span]';

export async function getSearchablePages(page: Page): Promise<string[]> {
	const xmlJSON = await page
		.goto(baseURL + '/sitemap.xml')
		.then((response) => response.text())
		.then((text) => xml2json(text))
		.then((json) => JSON.parse(json));

	const siteMap = xmlJSON.elements[0].elements;
	const availablePages = siteMap.map((s: any) => s.elements[0].elements[0].text);

	if (availablePages.length >= fallBackPages.length) {
		return availablePages.map((availablePage: string) => {
			const pathName = availablePage
				.toLowerCase()
				.match(/(?:http[s]?:\/\/)?(?:[^\/\s]+\/)(?<pathName>.*)/)?.groups?.pathName;
			return pathName?.charAt(0) === '/' ? '/' : '/' + pathName;
		});
	} else {
		return fallBackPages;
	}
}
