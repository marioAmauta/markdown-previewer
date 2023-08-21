import { useState } from 'react';
import { ActionButton } from './Buttons';
import { BUTTON_ACTIONS } from '../lib/constants';

export function Header() {
  const [darkMode, setDarkMode] = useState(false);

  function handleThemeButtonClick() {
    setDarkMode(darkMode => !darkMode);
  }

  return (
    <header className='main-header'>
      <h1 className='title'>Markdown Previewer</h1>
      <ActionButton
        label={darkMode ? BUTTON_ACTIONS.DARK : BUTTON_ACTIONS.LIGHT}
        actionHandler={handleThemeButtonClick}
      />
    </header>
  );
}
