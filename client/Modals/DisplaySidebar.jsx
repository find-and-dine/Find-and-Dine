/* eslint-disable react/prop-types */
import React from 'react';


const DisplaySidebar = ({ photo, photoIndex }) => (

  <div className="sidebar-container">
    {console.log(photoIndex)}
    <div id="caption-sidebar">
      <span className="sidebar-thumbnail">
        <img
          className="thumbnail-image"
          src={photo.thumbnail}
          alt={photo.caption}
          height="50px"
          width="50px"
        />
      </span>
      <span>
<div className="caption-text">{photo.caption}</div>
      </span>

    </div>
    <img
      src="./resources/ad.png"
      alt="sample"
    />
  </div>
);

export default DisplaySidebar;
