import { useEffect, useState } from 'react';
import { marked } from 'marked';
import DOMPurify from 'dompurify';
import { placeholderText } from '../lib/constants';

export function useEditor() {
  const [editorText, setEditorText] = useState('');

  function handleEditorChange(event) {
    const editorValue = event.target.value;
    setEditorText(editorValue);
  }

  function parseMarkdown(markdown) {
    return DOMPurify.sanitize(marked.parse(markdown));
  }

  useEffect(() => {
    const $preview = document.getElementById('preview');

    if (editorText.length === 0) {
      $preview.innerHTML = parseMarkdown(placeholderText);
    } else {
      $preview.innerHTML = parseMarkdown(editorText);
    }
  }, [editorText]);

  return { editorText, handleEditorChange };
}
