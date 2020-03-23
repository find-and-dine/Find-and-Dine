import React, { Component } from 'react';

import LeftButton from './LeftButton';
import RightButton from './RightButton';
import Carousel from './Carousel';
import ImageGalleryButton from './ImageGalleryButton';
import ImageHelpfulButton from './ImageHelpfulButton';
import ImageReportButton from './ImageReportButton';

class OnHoverModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      photoIndex: props.photoIndex,

    };
  }

  render() {
    const {
      photos, photoIndex, image, leftClick, rightClick, handleImageClick
    } = this.props;
    return (
      <div className="image-onHover-modal">
        <div className="image-onHover-modal-container">
          <LeftButton
            id="left-button"
            leftClick={leftClick}
          />
          <RightButton
            id="right-button"
            rightClick={rightClick}
          />
          {/* TODO: Carousel */}
          {/* check to see if carousel needs id */}
          <div id="image-carousel-position">
            <Carousel
              handleImageClick={handleImageClick}
              photos={photos}
              photoIndex={photoIndex}
              images={image}
            />
          </div>
          <ImageGalleryButton />
          <ImageHelpfulButton />
          <ImageReportButton />
        </div>
      </div>
    );
  }
}

export default OnHoverModal;
