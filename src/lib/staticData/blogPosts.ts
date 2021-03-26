import axios from 'axios';
import { externalUrls } from '@/lib/urls';
import type { BlogPostDataType, BlogPostType } from '@/types/index';

export default async function fetchAllBlogPosts(): Promise<BlogPostType[]> {
	const blogPostsData = await Promise.all([
		fetchMediumBlogPosts(),
		fetchDevtoBlogPosts(),
	]).then((arr) => [...arr[0], ...arr[1]]);

	const blogPosts = blogPostsData.sort(sortPosts).map((bp) => ({
		...bp,
		date: getReadableDate(bp.date),
	}));
	return blogPosts;
}

function fetchMediumBlogPosts(): Promise<Array<BlogPostDataType>> {
	return axios
		.get(externalUrls['blogs_medium'])
		.then((response) => response.data)
		.then((data) => {
			const blogposts: Array<BlogPostDataType> = [];
			if (!data || !data.items) return [];
			for (const medm of data.items) {
				blogposts.push({
					author: medm.author,
					categories: medm.categories,
					link: medm.link,
					image: medm.thumbnail,
					title: medm.title,
					date: getDateFromString(medm.pubDate),
				});
			}
			return blogposts;
		})
		.catch((err) => {
			console.log('error while fetching medium posts', err);
			return [];
		});
}

function fetchDevtoBlogPosts(): Promise<Array<BlogPostDataType>> {
	return axios
		.get(externalUrls['blogs_devto'])
		.then((response) => response.data)
		.then((data) => {
			const blogposts: Array<BlogPostDataType> = [];
			if (!data || !Array.isArray(data)) return [];
			for (const dvt of data) {
				blogposts.push({
					author: dvt.user.name,
					categories: dvt.tags,
					link: dvt.url,
					image: dvt.cover_image,
					title: dvt.title,
					date: getDateFromString(dvt.published_at),
				});
			}
			return blogposts;
		})
		.catch((err) => {
			console.log('error while fetching dev.to posts', err);
			return [];
		});
}

function getReadableDate(d: Date): string {
	const monthShortname = [
		'Jan',
		'Feb',
		'Mar',
		'Apr',
		'May',
		'Jun',
		'Jul',
		'Aug',
		'Sep',
		'Oct',
		'Nov',
		'Dec',
	];

	const month = monthShortname[d.getMonth()];

	const readableDate = `${d.getDate()} ${month}, ${d.getFullYear()}`;

	return readableDate;
}

function sortPosts(a: BlogPostDataType, b: BlogPostDataType) {
	if (a.date < b.date) return 1;
	else if (a.date > b.date) return -1;
	return 0;
}

function getDateFromString(str: string) {
	return new Date(str);
}
