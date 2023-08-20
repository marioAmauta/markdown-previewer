import { useState } from 'react';
import { MoonIcon, SunIcon } from './Icons';

export function Header() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <header className='main-header'>
      <h1 className='title'>Markdown Previewer</h1>
      <button onClick={() => setDarkMode(darkMode => !darkMode)}>
        {darkMode ? <SunIcon /> : <MoonIcon />}
      </button>
    </header>
  );
}
