import marked from 'marked';
import { sanitize } from 'dompurify';

export default function md(text: string) {
	const sanitizedText = sanitize(text);
	return marked(sanitizedText);
}
