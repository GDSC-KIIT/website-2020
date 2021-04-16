import Fuse from 'fuse.js';
/**@ts-ignore */
import indexed from './indexed.json';
/**@ts-ignore */
import extracted from './extracted.json';

/**
 * cache the fuse object
 * so that it is not required to parse the index everytime
 */
let initializedFuse: Fuse<unknown> | null = null;

export function search(query: string) {
	if (!initializedFuse) {
		const searchIndex = Fuse.parseIndex(indexed);
		const options: Fuse.IFuseOptions<unknown> = {
			keys: ['name', 'text'],
			shouldSort: true,
			isCaseSensitive: false,
		};
		const fuse = new Fuse(extracted.scrapped, options, searchIndex);
		initializedFuse = fuse;
	}
	const fuse = initializedFuse;
	const results: Fuse.FuseResult<IResult>[] = fuse.search(query);
	return results;
}

interface IResult {
	item: {
		name: string;
		text: string;
		pageName: string;
		locId: string;
	};
	refIndex: number;
}
