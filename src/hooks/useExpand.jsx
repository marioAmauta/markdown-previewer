import { useState } from 'react';

export function useExpand() {
  const [expanded, setExpanded] = useState(false);

  const expandedStyles = {
    position: 'fixed',
    inset: 0,
    zIndex: 9
  };

  const unexpandedStyles = {
    position: 'unset',
    inset: 'unset',
    zIndex: 'unset'
  };

  function handleButtonClick() {
    setExpanded(expanded => !expanded);
  }

  return { expanded, handleButtonClick, expandedStyles, unexpandedStyles };
}
