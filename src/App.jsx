import { Header } from './components/Header';
import { Preview } from './components/Preview';
import { Editor } from './components/Editor';

function App() {
  return (
    <section className='main-container'>
      <Header />
      <Preview />
      <Editor />
    </section>
  );
}

export default App;
