import puppeteer from 'puppeteer';
import Fuse from 'fuse.js';
import fs from 'fs';

import { baseURL, isHeadless, searchablePages, searchableSelector } from './constants';
interface IScrappedData {
	pageName: string;
	name: string;
	text: string;
}

async function getSearchableInPage(
	page: puppeteer.Page,
	currentSearchablePage: string
): Promise<IScrappedData[]> {
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

function createIndexFile(scrappedData: IScrappedData[]) {
	const options = { keys: ['name', 'text'] };
	const indexer = Fuse.createIndex(options.keys, scrappedData);
	fs.writeFileSync('indexer.json', JSON.stringify(indexer.toJSON(), null, '\t'));
}

async function createSearchIndex() {
	const browser = await puppeteer.launch({ headless: isHeadless });
	const page = await browser.newPage();
	await page.goto(baseURL);

	const scrappedData: IScrappedData[] = [];
	for (const s of searchablePages) {
		const found = await getSearchableInPage(page, s);
		scrappedData.push(...found);
	}

	createIndexFile(scrappedData);

	await browser.close();
}

createSearchIndex();
