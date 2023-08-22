import PropTypes from 'prop-types';
import { PLACEHOLDER_TEXT } from '../lib/constants';
import { useExpand } from '../hooks/useExpand';
import { ActionButton } from './Buttons';

export function Editor({ editorText, handleClearEditor, handleEditorChange, handleCopyMarkdown }) {
  const { expanded, handleExpandClick, expandedStyles, unexpandedStyles } = useExpand();

  return (
    <section
      className='editor-container'
      style={expanded ? expandedStyles : unexpandedStyles}
    >
      <header className='header'>
        <h2>Editor</h2>
        <div>
          <ActionButton
            label='Clear'
            actionHandler={handleClearEditor}
          />
          <ActionButton
            label='Copy Markdown'
            actionHandler={handleCopyMarkdown}
          />
          <ActionButton
            label={expanded ? 'Collapse' : 'Expand'}
            actionHandler={handleExpandClick}
          />
        </div>
      </header>
      <textarea
        placeholder={PLACEHOLDER_TEXT}
        value={editorText}
        onChange={handleEditorChange}
        id='editor'
      ></textarea>
    </section>
  );
}

Editor.propTypes = {
  editorText: PropTypes.string.isRequired,
  handleClearEditor: PropTypes.func.isRequired,
  handleEditorChange: PropTypes.func.isRequired,
  handleCopyMarkdown: PropTypes.func.isRequired
};
