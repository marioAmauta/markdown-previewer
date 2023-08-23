import { useEffect } from 'react';
import { SELECT_OPTIONS } from '../lib/constants';

export function useDarkMode() {
  function handleDarkModeChange({ target }) {
    const $rootElement = document.documentElement;

    if (target.value === SELECT_OPTIONS.LIGHT_MODE) {
      $rootElement.classList.remove('dark');
    } else if (target.value === SELECT_OPTIONS.DARK_MODE) {
      $rootElement.classList.add('dark');
    }
  }

  useEffect(() => {
    const prefersColorScheme = window.matchMedia('(prefers-color-scheme: dark)');

    function checkDarkMode(isDarkMode) {
      const $darkModeToggle = document.getElementById('darkModeToggle');
      const $rootElement = document.documentElement;

      if (isDarkMode) {
        $darkModeToggle.value = SELECT_OPTIONS.DARK_MODE;
        $rootElement.classList.add('dark');
      } else {
        $darkModeToggle.value = SELECT_OPTIONS.LIGHT_MODE;
        $rootElement.classList.remove('dark');
      }
    }

    checkDarkMode(prefersColorScheme.matches);

    prefersColorScheme.addEventListener('change', ({ matches }) => checkDarkMode(matches));
  }, []);

  return {
    handleDarkModeChange
  };
}
