import PropTypes from 'prop-types';
import { BUTTON_ACTIONS } from '../lib/constants';
import { CompressIcon, ExpandIcon, MoonIcon, SunIcon } from './Icons';

export function ActionButton({ label, actionHandler }) {
  function checkActionType() {
    switch (label) {
      case BUTTON_ACTIONS.EXPAND:
        return <ExpandIcon />;
      case BUTTON_ACTIONS.COMPRESS:
        return <CompressIcon />;
      case BUTTON_ACTIONS.DARK:
        return <SunIcon />;
      case BUTTON_ACTIONS.LIGHT:
        return <MoonIcon />;
      default:
        return label;
    }
  }

  return (
    <button
      className='btn'
      onClick={actionHandler}
    >
      {checkActionType()}
    </button>
  );
}

ActionButton.propTypes = {
  label: PropTypes.string.isRequired,
  actionHandler: PropTypes.func.isRequired
};
