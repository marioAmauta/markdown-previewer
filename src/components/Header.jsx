import { useEffect } from 'react';
import { SELECT_OPTIONS } from '../lib/constants';

export function Header() {
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
      <select
        id='darkModeToggle'
        className='btn'
        onChange={handleDarkModeChange}
      >
        <option value={SELECT_OPTIONS.LIGHT_MODE}>Light Mode</option>
        <option value={SELECT_OPTIONS.DARK_MODE}>Dark Mode</option>
      </select>
    </header>
  );
}
