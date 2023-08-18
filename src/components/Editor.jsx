import { placeholderText } from '../lib/constants';
import { useEditor } from '../hooks/useEditor';
import { ExpandButton, CompressButton } from './Icons';
import { useExpand } from '../hooks/useExpand';

export function Editor() {
  const { editorText, handleEditorChange } = useEditor();
  const { expanded, handleButtonClick, expandedStyles, unexpandedStyles } = useExpand();

  return (
    <section
      className='editor-container'
      style={expanded ? expandedStyles : unexpandedStyles}
    >
      <header className='header'>
        <h3>Editor</h3>
        <button onClick={handleButtonClick}>
          {expanded ? <CompressButton /> : <ExpandButton />}
        </button>
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
