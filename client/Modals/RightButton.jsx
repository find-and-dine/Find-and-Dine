import React from 'react';

const RightButton = ({ rightClick }) => (
  <div
    id="right_button"
    onClick={rightClick}
    type="button"
  >
    &#62;
  </div>
);

export default RightButton;
