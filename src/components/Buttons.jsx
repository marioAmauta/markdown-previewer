import { buttonActions } from '../lib/constants';
import { CompressIcon, ExpandIcon, MoonIcon, SunIcon } from './Icons';
import PropTypes from 'prop-types';

export function ActionButton({ label, actionHandler }) {
  function checkActionType() {
    switch (label) {
      case buttonActions.EXPAND:
        return <ExpandIcon />;
      case buttonActions.COMPRESS:
        return <CompressIcon />;
      case buttonActions.DARK:
        return <SunIcon />;
      case buttonActions.LIGHT:
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
