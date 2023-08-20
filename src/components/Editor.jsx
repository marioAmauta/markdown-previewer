import { placeholderText } from '../lib/constants';
import { useEditor } from '../hooks/useEditor';
import { useExpand } from '../hooks/useExpand';
import { CopyToClipboardButton, ExpandButton } from './Buttons';

export function Editor() {
  const { editorText, handleEditorChange } = useEditor();
  console.log({
    editorText
  });
  const { expanded, handleExpandClick, expandedStyles, unexpandedStyles } = useExpand();

  return (
    <section
      className='editor-container'
      style={expanded ? expandedStyles : unexpandedStyles}
    >
      <header className='header'>
        <h3>Editor</h3>
        <div>
          <button>Clear editor</button>
          <CopyToClipboardButton contentToCopy={editorText} />
          <ExpandButton
            expanded={expanded}
            handleExpandClick={handleExpandClick}
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
