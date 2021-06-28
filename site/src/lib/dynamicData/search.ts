import axios, { CancelTokenSource } from 'axios';

import type { SearchResultType } from '@/types/index';
import { externalUrls } from '@/lib/urls';

let cancelSource: CancelTokenSource | undefined;

export function cancelOnUnMount() {
	if (cancelSource) {
		cancelSource.cancel('Search cancelled due to UnMount');
	}
}

export async function getSearchResults(query: string): Promise<SearchResultType[]> {
	if (query.length === 0) {
		return [];
	}

	if (cancelSource) {
		console.log('cancelling now', cancelSource.token);
		cancelSource.cancel('Search cancelled due to new Query');
	}

	cancelSource = axios.CancelToken.source();

	return axios({
		method: 'GET',
		baseURL: externalUrls.search,
		params: { query },
		cancelToken: cancelSource.token,
	})
		.then((response) => response.data)
		.catch(() => []);
}
