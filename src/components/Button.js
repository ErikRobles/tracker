import PropTypes from 'prop-types';

import React from 'react';

const Button = ({ color, text, onClick }) => {
  return (
    <button
      className='btn'
      onClick={onClick}
      style={{ backgroundColor: color }}
    >
      {text}
    </button>
  );
};

Button.propTypes = {
  text: PropTypes.string,
  color: PropTypes.string,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  color: 'steelblue',
};

export default Button;
