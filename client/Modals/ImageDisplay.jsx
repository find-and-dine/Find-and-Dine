/* eslint-disable react/prop-types */
import React from 'react';

const ImageDisplay = ({ image }) => (

  <div className="image-viewer-container">
    <img
      src={image.url}
      alt={image.caption}
      className="image-display"
    />
  </div>



);

export default ImageDisplay;
