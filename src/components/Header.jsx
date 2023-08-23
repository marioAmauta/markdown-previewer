import { useState } from 'react';
import { useDarkMode } from '../hooks/useDarkMode';
import { SELECT_OPTIONS } from '../lib/constants';

export function Header() {
  const [savedDate, setSavedDate] = useState(new Date().toLocaleString());
  const { handleDarkModeChange } = useDarkMode();

  console.log('rendering Header');

  return (
    <header className='main-header'>
      <nav>
        <h1 className='title'>Markdown Previewer</h1>
        <select
          id='darkModeToggle'
          className='btn'
          onChange={handleDarkModeChange}
        >
          <option value={SELECT_OPTIONS.LIGHT_MODE}>Light</option>
          <option value={SELECT_OPTIONS.DARK_MODE}>Dark</option>
        </select>
      </nav>
      <span>Last saved {savedDate}</span>
    </header>
  );
}
