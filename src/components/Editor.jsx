import { buttonActions, placeholderText } from '../lib/constants';
import { useEditor } from '../hooks/useEditor';
import { useExpand } from '../hooks/useExpand';
import { ActionButton } from './Buttons';

export function Editor() {
  const { editorText, handleClearEditor, handleEditorChange, handleCopyMarkdown } = useEditor();
  const { expanded, handleExpandClick, expandedStyles, unexpandedStyles } = useExpand();

  return (
    <section
      className='editor-container'
      style={expanded ? expandedStyles : unexpandedStyles}
    >
      <header className='header'>
        <h3>Editor</h3>
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
            label={expanded ? buttonActions.COMPRESS : buttonActions.EXPAND}
            actionHandler={handleExpandClick}
          />
        </div>
      </header>
      <textarea
        placeholder={placeholderText}
        value={editorText}
        onChange={handleEditorChange}
        id='editor'
      ></textarea>
    </section>
  );
}
