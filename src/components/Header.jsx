import { useEffect } from 'react';
import { SELECT_OPTIONS } from '../lib/constants';
import { ActionButton } from './Buttons';
import { useEditor } from '../hooks/useEditor';

export function Header() {
  const { handleSaveProgressClick } = useEditor();
  function handleDarkModeChange({ target }) {
    const $rootElementClassList = document.documentElement.classList;

    if (target.value === SELECT_OPTIONS.LIGHT_MODE) {
      $rootElementClassList.remove('dark');
    } else if (target.value === SELECT_OPTIONS.DARK_MODE) {
      $rootElementClassList.add('dark');
    }
  }

  useEffect(() => {
    const $rootElementClassList = document.documentElement.classList;
    const $darkModeToggle = document.getElementById('darkModeToggle');
    const prefersColorScheme = window.matchMedia('(prefers-color-scheme: dark)');

    function checkDarkMode(isDarkMode) {
      if (isDarkMode) {
        $darkModeToggle.value = SELECT_OPTIONS.DARK_MODE;
        $rootElementClassList.add('dark');

        console.log('change to dark mode!');
      } else {
        $darkModeToggle.value = SELECT_OPTIONS.LIGHT_MODE;
        $rootElementClassList.remove('dark');

        console.log('change to light mode!');
      }
    }

    checkDarkMode(prefersColorScheme.matches);

    prefersColorScheme.addEventListener('change', ({ matches }) => {
      checkDarkMode(matches);
    });
  }, []);

  return (
    <header className='main-header'>
      <h1 className='title'>Markdown Previewer</h1>
      <div>
        <span>Last saved {new Date().toLocaleString()}</span>
        <nav>
          <ActionButton
            label='Save'
            actionHandler={handleSaveProgressClick}
          />

          <select
            id='darkModeToggle'
            className='btn'
            onChange={handleDarkModeChange}
          >
            <option value={SELECT_OPTIONS.LIGHT_MODE}>Light</option>
            <option value={SELECT_OPTIONS.DARK_MODE}>Dark</option>
          </select>
        </nav>
      </div>
    </header>
  );
}
