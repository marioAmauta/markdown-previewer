import { useExpand } from '../hooks/useExpand';
import { ExpandButton } from './Buttons';

export function Preview() {
  const { expanded, handleExpandClick, expandedStyles, unexpandedStyles } = useExpand();

  return (
    <section
      className='preview-container'
      style={expanded ? expandedStyles : unexpandedStyles}
    >
      <header className='header'>
        <h3>Preview</h3>
        <div>
          <ExpandButton
            expanded={expanded}
            handleExpandClick={handleExpandClick}
          />
        </div>
      </header>
      <div id='preview'></div>
    </section>
  );
}
