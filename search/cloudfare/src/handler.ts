/**@ts-ignore */
import indexed from './indexed.json';
import { search } from './search';

async function respondBadRequest(
	message: string = '"query" param not provided'
): Promise<Response> {
	const json = JSON.stringify({ message });
	return new Response(json, {
		status: 400,
		statusText: 'Bad Request',
		headers: { 'content-type': 'application/json;charset=UTF-8' },
	});
}

async function respondSearchResults(query: string): Promise<Response> {
	const results = search(query);
	console.log('the found results were', results[0].item);
	return new Response(`request method: got`);
}

export async function handleRequest(request: Request): Promise<Response> {
	const { searchParams } = new URL(request.url);
	const query = searchParams.get('query');
	if (!query) {
		return respondBadRequest();
	}

	return respondSearchResults(query);
}
