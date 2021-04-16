import { search } from './search';

const headers = {
	'content-type': 'application/json;charset=UTF-8',
	'Access-Control-Allow-Origin': '*',
	'Access-Control-Allow-Methods': 'GET,OPTIONS',
};

async function respondBadRequest(
	message: string = '"query" param not provided'
): Promise<Response> {
	const json = JSON.stringify({ message });
	return new Response(json, {
		status: 400,
		statusText: 'BAD REQUEST',
		headers: { ...headers },
	});
}

async function respondSearchResults(query: string): Promise<Response> {
	const results = search(query);
	const json = JSON.stringify(results);
	return new Response(json, {
		status: 200,
		statusText: 'OK',
		headers: { ...headers },
	});
}

export async function handleRequest(request: Request): Promise<Response> {
	const { searchParams } = new URL(request.url);
	const query = searchParams.get('query');
	if (!query) {
		return respondBadRequest();
	}

	return respondSearchResults(query);
}
