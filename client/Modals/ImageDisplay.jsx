/* eslint-disable react/prop-types */
import React from 'react';

const ImageDisplay = ({ image, onMouseEnter, onMouseLeave }) => (

  <div className="image-viewer-container">
    <img
      src={image.url}
      alt={image.caption}
      className="image-display"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    />
    <div className="image-background">
      {null}
    </div>
  </div>


);

export default ImageDisplay;
