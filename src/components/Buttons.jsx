import PropTypes from 'prop-types';

export function ActionButton({ label, actionHandler }) {
  return (
    <button
      className='btn'
      onClick={actionHandler}
      name={label}
    >
      {label}
    </button>
  );
}

ActionButton.propTypes = {
  label: PropTypes.string.isRequired,
  actionHandler: PropTypes.func.isRequired
};
