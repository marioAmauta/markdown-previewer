import { useEffect, useState } from 'react';
import { marked } from 'marked';

function App() {
  const [editorText, setEditorText] = useState('');

  function handleEditorChange(event) {
    const editorValue = event.target.value;

    setEditorText(editorValue);
  }

  useEffect(() => {
    const $previewIFrame = document.getElementById('preview');

    const previewText = marked(editorText);

    $previewIFrame.contentDocument.body.innerHTML = previewText;
  }, [editorText]);

  return (
    <section className='main-container'>
      <h1 className='title'>Markdown Previewer</h1>
      <section className='preview-container'>
        <header className='header'>
          <h3>Preview</h3>
          <i>Expand</i>
        </header>
        <iframe id='preview'></iframe>
      </section>
      <section className='editor-container'>
        <header className='header'>
          <h3>Editor</h3>
          <i>Expand</i>
        </header>
        <textarea
          value={editorText}
          onChange={handleEditorChange}
          id='editor'
        ></textarea>
      </section>
    </section>
  );
}

export default App;
