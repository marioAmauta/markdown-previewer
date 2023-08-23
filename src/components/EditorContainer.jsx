import { useEditor } from '../hooks/useEditor';
import { COPY_TYPES } from '../lib/constants';
import { Preview } from './Preview';
import { Editor } from './Editor';

export function EditorContainer() {
  const { editorText, handleClearEditor, handleEditorChange, handleCopyClick, handleSelectChange } =
    useEditor();

  return (
    <>
      <Preview
        handleSelectChange={handleSelectChange}
        handleCopyHTML={() =>
          handleCopyClick({
            type: COPY_TYPES.HTML
          })
        }
      />
      <Editor
        editorText={editorText}
        handleEditorChange={handleEditorChange}
        handleClearEditor={handleClearEditor}
        handleCopyMarkdown={() =>
          handleCopyClick({
            type: COPY_TYPES.MARKDOWN
          })
        }
      />
    </>
  );
}
