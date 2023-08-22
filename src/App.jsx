import { useEditor } from './hooks/useEditor';
import { COPY_TYPES } from './lib/constants';
import { Header } from './components/Header';
import { Preview } from './components/Preview';
import { Editor } from './components/Editor';

export function App() {
  const { editorText, handleClearEditor, handleEditorChange, handleCopyClick, handleSelectChange } =
    useEditor();

  return (
    <>
      <Header />
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
