import { ReactPropTypes } from 'react';
import { CompressIcon, ExpandIcon } from './Icons';

export function CopyToClipboardButton({ contentToCopy }) {
  async function writeToClipboard(contentToCopy) {
    try {
      if (contentToCopy === '') return alert('Nothing to copy!');

      await navigator.clipboard.writeText(contentToCopy);
      alert('Text copied to clipboard!');
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
  }

  return <button onClick={() => writeToClipboard(contentToCopy)}>Copy to clipboard</button>;
}

export function ExpandButton({ expanded, handleExpandClick }) {
  return (
    <button onClick={handleExpandClick}>{expanded ? <CompressIcon /> : <ExpandIcon />}</button>
  );
}
