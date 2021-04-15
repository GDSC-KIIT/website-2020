import puppeteer from 'puppeteer';

import { baseURL } from './constants';

async function getSomething() {
	const browser = await puppeteer.launch({ headless: false });
	const page = await browser.newPage();
	await page.goto(baseURL);
	await page.screenshot({ path: '1.png', fullPage: true });
	await browser.close();
}

getSomething();
