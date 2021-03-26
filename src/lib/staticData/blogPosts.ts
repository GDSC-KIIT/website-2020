import axios from 'axios';
import { externalUrls } from '@/lib/externalUrls';
import type { BlogPostDataType } from '@/types/index';

export function fetchMediumBlogPosts(): Promise<Array<BlogPostDataType>> {
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

export function fetchDevtoBlogPosts(): Promise<Array<BlogPostDataType>> {
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

function getDateFromString(str: string) {
	return new Date(str);
}
