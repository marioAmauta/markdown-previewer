import PropTypes from 'prop-types';
import { useExpand } from '../hooks/useExpand';
import { SELECT_OPTIONS } from '../lib/constants';
import { ActionButton } from './Buttons';

export function Preview({ handleCopyHTML, handleSelectChange }) {
  const { expanded, handleExpandClick, expandedStyles, unexpandedStyles } = useExpand();

  return (
    <section
      className='preview-container'
      style={expanded ? expandedStyles : unexpandedStyles}
    >
      <header className='header'>
        <h2>View</h2>
        <div>
          <select
            className='btn'
            onChange={handleSelectChange}
            defaultValue={SELECT_OPTIONS.PREVIEW}
          >
            <option value={SELECT_OPTIONS.PREVIEW}>Preview</option>
            <option value={SELECT_OPTIONS.HTML}>HTML</option>
          </select>
          <ActionButton
            label='Copy HTML'
            actionHandler={handleCopyHTML}
          />
          <ActionButton
            label={expanded ? 'Collapse' : 'Expand'}
            actionHandler={handleExpandClick}
          />
        </div>
      </header>
      <div id='preview'></div>
    </section>
  );
}

Preview.propTypes = {
  handleCopyHTML: PropTypes.func.isRequired,
  handleSelectChange: PropTypes.func.isRequired
};
