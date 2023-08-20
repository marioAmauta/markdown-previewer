import { Header } from './components/Header';
import { Preview } from './components/Preview';
import { Editor } from './components/Editor';
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    navigator.permissions.query({ name: 'write-on-clipboard' }).then(result => {
      if (result.state == 'granted' || result.state == 'prompt') {
        alert('Write access granted!');
      }
    });
  }, []);

  return (
    <section className='main-container'>
      <Header />
      <Preview />
      <Editor />
    </section>
  );
}

export default App;
