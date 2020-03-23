/* eslint-disable react/prop-types */
import React from 'react';

const DisplaySidebar = ({ photo, photoIndex }) => (
  <div className="sidebar-container">
    <div id="caption-sidebar">
      <span className="sidebar-thumbnail">
        <img
          className="thumbnail-image"
          src={photo[photoIndex].thumbnail}
          alt={photo[photoIndex].caption}
          height="50px"
          width="50px"
        />
      </span>
      <span>
        <div>Rating: {photo[photoIndex].rating}</div>
        <div className="caption-text">{photo[photoIndex].caption}</div>
        <div> Traveler photo submitted by {photo[photoIndex].username}</div>
      </span>
    </div>
    <img
      src="./resources/ad.png"
      alt="ad"
    />
  </div>
);

export default DisplaySidebar;
