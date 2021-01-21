import marked from 'marked';
import { highlightAuto } from 'highlight.js';
import { sanitize } from 'dompurify';

export default function md(text: string) {
	marked.setOptions({
		highlight: (code) => highlightAuto(code).value,
		sanitizer: (text) => sanitize(text),
	});

	return marked(text);
}
