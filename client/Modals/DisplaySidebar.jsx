/* eslint-disable react/prop-types */
import React, { Component } from 'react';

class DisplaySidebar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dynamicPhotoIndex: props.photoIndex,
      photo: props.photo,
    };
  }

  render() {
    const { photo, dynamicPhotoIndex } = this.state;
    return (
      <div className="sidebar-container">

        <div id="caption-sidebar">
          <span className="sidebar-thumbnail">
            <img
              className="thumbnail-image"
              src={photo[dynamicPhotoIndex].thumbnail}
              alt={photo[dynamicPhotoIndex].caption}
              height="50px"
              width="50px"
            />
          </span>
          <span>
            <div className="caption-text">{photo[dynamicPhotoIndex].caption}</div>
          </span>

        </div>
        <img
          src="./resources/ad.png"
          alt="sample"
        />
      </div>
    )
  }
}

export default DisplaySidebar;
