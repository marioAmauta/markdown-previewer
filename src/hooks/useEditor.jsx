import { useEffect, useState } from 'react';
import { placeholderText } from '../lib/constants';
import { writeToClipboard } from '../lib/services';
import { marked } from 'marked';
import DOMPurify from 'dompurify';

export function useEditor() {
  const [editorText, setEditorText] = useState('');
  const [previewText, setPreviewText] = useState('');

  function handleEditorChange(event) {
    const editorValue = event.target.value;
    setEditorText(editorValue);
  }

  function handleClearEditor() {
    if (editorText.length === 0) return;

    const isDeleteConfirmed = confirm('Are you sure you want to clear the editor?');

    if (isDeleteConfirmed) {
      setEditorText('');
    }
  }

  function handleCopyHTML() {
    writeToClipboard(previewText);
  }

  function handleCopyMarkdown() {
    writeToClipboard(editorText);
  }

  useEffect(() => {
    const $preview = document.getElementById('preview');

    const parsedMarkdown = DOMPurify.sanitize(
      marked.parse(editorText.length === 0 ? placeholderText : editorText)
    );

    setPreviewText(parsedMarkdown);

    $preview.innerHTML = parsedMarkdown;
  }, [editorText, previewText]);

  return {
    editorText,
    previewText,
    handleClearEditor,
    handleEditorChange,
    handleCopyHTML,
    handleCopyMarkdown
  };
}
