import { useEffect, useState } from 'react';
import { COPY_TYPES, PLACEHOLDER_TEXT, SELECT_OPTIONS, LOCAL_STORAGE_KEYS } from '../lib/constants';
import { parseMarkdown, writeToClipboard } from '../lib/services';

export function useEditor() {
  const [editorText, setEditorText] = useState('');
  const [selectValue, setSelectValue] = useState(SELECT_OPTIONS.PREVIEW);
  const editorWithText = editorText.length === 0 ? PLACEHOLDER_TEXT : editorText;
  const parsedMarkdown = parseMarkdown(editorWithText);

  function handleEditorChange({ target }) {
    setEditorText(target.value);
    localStorage.setItem(
      LOCAL_STORAGE_KEYS.LAST_SAVED,
      JSON.stringify(new Date().toLocaleString())
    );
  }

  function handleClearEditor() {
    if (editorText.length === 0) return;

    if (confirm('Are you sure you want to clear the editor?')) {
      setEditorText('');
      localStorage.removeItem(LOCAL_STORAGE_KEYS.LAST_SAVED);
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
    const savedEditorText = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEYS.EDITOR_TEXT));

    if (savedEditorText) {
      setEditorText(savedEditorText);
    }
  }, []);

  useEffect(() => {
    const $preview = document.getElementById('preview');

    if (selectValue === SELECT_OPTIONS.PREVIEW) {
      $preview.innerHTML = parsedMarkdown;
    }

    if (selectValue === SELECT_OPTIONS.HTML) {
      $preview.innerText = parsedMarkdown;
    }
  }, [selectValue, parsedMarkdown]);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEYS.EDITOR_TEXT, JSON.stringify(editorText));
  }, [editorText]);

  return {
    editorText,
    handleClearEditor,
    handleEditorChange,
    handleCopyClick,
    handleSelectChange
  };
}
