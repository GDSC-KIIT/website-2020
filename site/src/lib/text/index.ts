export function capitalizeWord(word: string): string {
	return word.charAt(0).toUpperCase() + word.slice(1);
}

export function capitalizeEachWord(words: string): string {
	return words.split(' ').map(capitalizeWord).join(' ');
}

export function getReadableNameFromDomain(domain: string): string {
	return domain.split('_').map(capitalizeWord).join(' ').toUpperCase();
}

export function getReadableNameFromDomainUpperCased(domain: string): string {
	return domain.toUpperCase().split('_').join(' ');
}
