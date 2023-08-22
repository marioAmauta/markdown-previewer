import { useState } from 'react';

export function useExpand() {
  const [expanded, setExpanded] = useState(false);

  const expandedStyles = {
    position: 'fixed',
    inset: '0.6rem',
    zIndex: 9
  };

  const unexpandedStyles = {
    position: 'unset',
    inset: 'unset',
    zIndex: 'unset'
  };

  function handleExpandClick() {
    setExpanded(expanded => !expanded);
  }

  return { expanded, handleExpandClick, expandedStyles, unexpandedStyles };
}
