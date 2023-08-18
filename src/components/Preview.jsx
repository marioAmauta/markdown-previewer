import { CompressButton, ExpandButton } from './Icons';
import { useExpand } from '../hooks/useExpand';

export function Preview() {
  const { expanded, handleButtonClick, expandedStyles, unexpandedStyles } = useExpand();

  return (
    <section
      className='preview-container'
      style={expanded ? expandedStyles : unexpandedStyles}
    >
      <header className='header'>
        <h3>Preview</h3>
        <button onClick={handleButtonClick}>
          {expanded ? <CompressButton /> : <ExpandButton />}
        </button>
      </header>
      <div id='preview'></div>
    </section>
  );
}
