import { useDarkMode } from '../hooks/useDarkMode';
import { LOCAL_STORAGE_KEYS, SELECT_OPTIONS } from '../lib/constants';

export function Header() {
  const { handleDarkModeChange } = useDarkMode();
  const lastSaved = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEYS.LAST_SAVED));

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
      <span>{lastSaved ? `Last saved: ${lastSaved}` : ''}</span>
    </header>
  );
}
