import Fuse from 'fuse.js';
/**@ts-ignore */
import indexed from './indexed.json';
/**@ts-ignore */
import extracted from './extracted.json';

let initializedFuse: Fuse<unknown> | null = null;
let count: number = 0;

export function search(query: string) {
	if (!initializedFuse) {
		console.log('does execute', count++);
		const searchIndex = Fuse.parseIndex(indexed);
		const options = { keys: ['name', 'text'] };
		const fuse = new Fuse(extracted.scrapped, options, searchIndex);
		initializedFuse = fuse;
	}
	const fuse = initializedFuse;
	const results = fuse.search(query);
	return results;
}
