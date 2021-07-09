import marked from 'marked';
import hljs from 'highlight.js';
import { sanitize } from 'dompurify';

export default function md(text: string) {
	marked.setOptions({
		highlight: (code) => hljs.highlightAuto(code).value,
		sanitizer: (text) => sanitize(text),
	});

	return marked(text);
}
