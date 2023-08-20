import { useEditor } from '../hooks/useEditor';
import { useExpand } from '../hooks/useExpand';
import { buttonActions } from '../lib/constants';
import { ActionButton } from './Buttons';

export function Preview() {
  const { handleCopyHTML } = useEditor();
  const { expanded, handleExpandClick, expandedStyles, unexpandedStyles } = useExpand();

  return (
    <section
      className='preview-container'
      style={expanded ? expandedStyles : unexpandedStyles}
    >
      <header className='header'>
        <h3>Preview</h3>
        <div>
          <ActionButton
            label='Copy HTML'
            actionHandler={handleCopyHTML}
          />
          <ActionButton
            label={expanded ? buttonActions.COMPRESS : buttonActions.EXPAND}
            actionHandler={handleExpandClick}
          />
        </div>
      </header>
      <div id='preview'></div>
    </section>
  );
}
