import { useTheme } from '../hooks/useTheme';
import { LOCAL_STORAGE_KEYS, THEME_MODES } from '../lib/constants';

export function Header() {
  const { theme, onThemeChange } = useTheme();
  const lastSaved = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEYS.LAST_SAVED));

  return (
    <header className='main-header'>
      <nav>
        <h1 className='title'>Markdown Previewer</h1>
        <select
          id='darkModeToggle'
          className='btn'
          onChange={onThemeChange}
          value={theme}
        >
          {Object.values(THEME_MODES).map(theme => (
            <option
              key={theme}
              value={theme}
            >
              {theme.charAt(0).toUpperCase() + theme.slice(1)}
            </option>
          ))}
        </select>
      </nav>
      <span>{lastSaved ? `Last saved: ${lastSaved}` : ''}</span>
    </header>
  );
}
