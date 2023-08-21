import { marked } from 'marked';
import DOMPurify from 'dompurify';

export async function writeToClipboard(contentToCopy) {
  try {
    if (contentToCopy === '') return alert('Nothing to copy!');

    await navigator.clipboard.writeText(contentToCopy);

    alert('Copied to clipboard!');
  } catch (error) {
    console.error({
      message: 'Error copying to clipboard',
      error
    });
  }
}

marked.use({
  breaks: true,
  gfm: true
});

export function parseMarkdown(markdown) {
  return DOMPurify.sanitize(marked.parse(markdown));
}
