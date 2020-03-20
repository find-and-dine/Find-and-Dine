/* eslint-disable react/prop-types */
import React from 'react';

const ImageDisplay = ({ image, onMouseEnter, onMouseLeave }) => (

  <div className="image-viewer-container">
    <div className="image-background">
    </div>
    <img
      src={image.url}
      alt={image.caption}
      className="image-display"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    />
  </div>


);

export default ImageDisplay;
