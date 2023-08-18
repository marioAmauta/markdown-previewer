import { Editor } from './components/Editor';
import { Preview } from './components/Preview';

function App() {
  return (
    <section className='main-container'>
      <h1 className='title'>Markdown Previewer</h1>
      <Preview />
      <Editor />
    </section>
  );
}

export default App;
