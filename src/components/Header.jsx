import { useState } from 'react';
import { ActionButton } from './Buttons';
import { buttonActions } from '../lib/constants';

export function Header() {
  const [darkMode, setDarkMode] = useState(false);

  function handleThemeButtonClick() {
    setDarkMode(darkMode => !darkMode);
  }

  return (
    <header className='main-header'>
      <h1 className='title'>Markdown Previewer</h1>
      <ActionButton
        label={darkMode ? buttonActions.DARK : buttonActions.LIGHT}
        actionHandler={handleThemeButtonClick}
      />
    </header>
  );
}
