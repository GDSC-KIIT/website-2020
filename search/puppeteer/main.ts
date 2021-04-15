import puppeteer from 'puppeteer';

import { baseURL, isHeadless, searchablePages, searchableSelector } from './constants';

interface IScrappedData {
	pageName: string;
	name: string;
	text: string;
}

async function getSearchableInPage(page: puppeteer.Page, currentSearchablePage: string) {
	await page.goto(baseURL + currentSearchablePage);

	const foundContent = await page.$$eval(searchableSelector, (scontents, currentSearchablePage) =>
		scontents.map((sc) => ({
			pageName: (currentSearchablePage as string) ?? '',
			name: (sc as HTMLElement).dataset.search ?? '',
			text: (sc as HTMLElement).innerText ?? '',
		}))
	);

	return foundContent;
}

async function createSearchIndex() {
	const browser = await puppeteer.launch({ headless: isHeadless });
	const page = await browser.newPage();
	await page.goto(baseURL);

	for (const s of searchablePages) {
		const found = await getSearchableInPage(page, s);
		console.log('in page ' + s);
		console.log(found);
		console.log('========');
	}

	await browser.close();
}

createSearchIndex();
