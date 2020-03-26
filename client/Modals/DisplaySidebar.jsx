/* eslint-disable react/prop-types */
import React from 'react';
import Rating from './Rating';

const DisplaySidebar = ({ photo, photoIndex }) => (
  <div className="sidebar-background">
    <div id="sidebar-container">
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
        <div id="sidebar-rating">
          <Rating
            photo={photo}
            photoIndex={photoIndex}
          />
        </div>
        <div className="caption-text">{photo[photoIndex].caption}</div>
        <div>
          Traveler photo submitted by
          {photo[photoIndex].username}
        </div>
      </span>
    </div>
    <img
      src="https://guilttripadvisor-phonxay.s3.us-east-2.amazonaws.com/ad.png"
      alt="ad"
    />
  </div>
);

export default DisplaySidebar;
