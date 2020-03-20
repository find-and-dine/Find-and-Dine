import React from 'react';

const LeftButton = ({ leftClick }) => (
  <button
    id="left_button"
    onClick={leftClick}
    type="button"
  >
    &#60;
  </button>
);

export default LeftButton;
