import { useEffect, useState } from 'react';
import { THEME_MODES } from '../lib/constants';

export function useTheme() {
  const [theme, setTheme] = useState('');

  function onThemeChange(event) {
    setTheme(event.target.value);

    if (event.target.value === THEME_MODES.SYSTEM) {
      localStorage.removeItem('theme');
    } else if (event.target.value === THEME_MODES.LIGHT) {
      localStorage.theme = THEME_MODES.LIGHT;
    } else if (event.target.value === THEME_MODES.DARK) {
      localStorage.theme = THEME_MODES.DARK;
    }
  }

  useEffect(() => {
    setTheme(localStorage.theme || THEME_MODES.SYSTEM);

    function checkDarkMode(isDarkMode) {
      if (localStorage.theme === THEME_MODES.DARK || (!('theme' in localStorage) && isDarkMode)) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    }

    const prefersColorScheme = window.matchMedia('(prefers-color-scheme: dark)');

    checkDarkMode(prefersColorScheme.matches);

    prefersColorScheme.addEventListener('change', ({ matches }) => checkDarkMode(matches));

    return () =>
      prefersColorScheme.removeEventListener('change', ({ matches }) => checkDarkMode(matches));
  }, [theme]);

  return { theme, onThemeChange };
}
