import React from 'react';

const ImageDisplay = ({ image, leftButtonClickHandler, rightButtonClickHandler }) => (

  <div className="image_viewer_container">
    <img
      src={image.url}
      alt={image.caption}
      className="image_display"
    />
  </div>


);

export default ImageDisplay;
