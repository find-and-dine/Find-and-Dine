import React from 'react';

const RightButton = ({ rightClick }) => (
  <div
    id="right-button"
    onClick={rightClick}
    type="button"
  >
    &#62;
  </div>
);

export default RightButton;
