import axios from 'axios';
import { externalUrls } from '@/lib/externalUrls';

export interface IBlogPost {
	author: string;
	categories: [];
	link: string;
	image: string;
	title: string;
	date: string;
}

export function fetchMediumBlogPosts(): Promise<Array<IBlogPost>> {
	return axios
		.get(externalUrls['blogs_medium'])
		.then((response) => response.data)
		.then((data) => {
			const blogposts: Array<IBlogPost> = [];
			if (!data || !data.items) return [];
			for (const medm of data.items) {
				blogposts.push({
					author: medm.author,
					categories: medm.categories,
					link: medm.link,
					image: medm.thumbnail,
					title: medm.title,
					date: medm.pubDate,
				});
			}
			return blogposts;
		})
		.catch((err) => {
			console.log('error while fetching medium posts', err);
			return [];
		});
}

export function fetchDevtoBlogPosts(): Promise<Array<IBlogPost>> {
	return axios
		.get(externalUrls['blogs_devto'])
		.then((response) => response.data)
		.then((data) => {
			const blogposts: Array<IBlogPost> = [];
			if (!data || !Array.isArray(data)) return [];
			for (const dvt of data) {
				blogposts.push({
					author: dvt.user.name,
					categories: dvt.tags,
					link: dvt.url,
					image: dvt.cover_image,
					title: dvt.title,
					date: dvt.published_at,
				});
			}
			return blogposts;
		})
		.catch((err) => {
			console.log('error while fetching dev.to posts', err);
			return [];
		});
}
