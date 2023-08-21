import { useEffect, useState } from 'react';
import { COPY_TYPES, PLACEHOLDER_TEXT, SELECT_OPTIONS } from '../lib/constants';
import { parseMarkdown, writeToClipboard } from '../lib/services';

export function useEditor() {
  const [editorText, setEditorText] = useState('');
  const [selectValue, setSelectValue] = useState(SELECT_OPTIONS.PREVIEW);
  const editorWithText = editorText.length === 0 ? PLACEHOLDER_TEXT : editorText;
  const parsedMarkdown = parseMarkdown(editorWithText);

  function handleEditorChange({ target }) {
    setEditorText(target.value);
  }

  function handleClearEditor() {
    if (editorText.length === 0) return;

    if (confirm('Are you sure you want to clear the editor?')) {
      setEditorText('');
    }
  }

  function handleCopyClick({ type }) {
    if (type === COPY_TYPES.HTML) {
      writeToClipboard(parsedMarkdown);
    }

    if (type === COPY_TYPES.MARKDOWN) {
      writeToClipboard(editorWithText);
    }
  }

  function handleSelectChange({ target }) {
    setSelectValue(target.value);
  }

  useEffect(() => {
    const $preview = document.getElementById('preview');

    if (selectValue === SELECT_OPTIONS.PREVIEW) {
      $preview.innerHTML = parsedMarkdown;
    }

    if (selectValue === SELECT_OPTIONS.HTML) {
      $preview.innerText = parsedMarkdown;
    }
  }, [editorText, selectValue, parsedMarkdown]);

  return {
    editorText,
    handleClearEditor,
    handleEditorChange,
    handleCopyClick,
    handleSelectChange
  };
}
