export function getStrapiURL(path = '') {
	return `${process.env.NEXT_PUBLIC_STRAPI_API_URL || 'http://localhost:9000'}${path}`;
}

// Helper to make GET requests to Strapi
export async function fetchAPI(path: string) {
	const requestUrl: string = getStrapiURL(path);
	const response = await fetch(requestUrl);
	const data = await response.json();

	return data.sort((a: any, b: any) => {
		if (a.order > b.order) {
			return 1;
		} else {
			return -1;
		}
	});
}

export async function fetchAPIProjects(path: string) {
	const requestUrl: string = getStrapiURL(path);
	const response = await fetch(requestUrl);
	const data = await response.json();

	return data;
}
