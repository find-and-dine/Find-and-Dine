/* eslint-disable react/prop-types */
import React, { Component } from 'react';

import DisplayFocusedImage from './DisplayFocusedImage';

class FocusedImagesModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    const { closeModal, photos, photoIndex } = this.props;
    return (
      <div>
        <div className="image-gallery-modal-container">
          <button
            onClick={closeModal}
            type="button"
            id="image-gallery-exit-button"
          >
            &times;
          </button>
          <div
            id="image-gallery-exit-button-background"
          />
          <div
            id="image-black-background"
          />
          <div className="image-gallery-modal-container">
            <DisplayFocusedImage
              photos={photos}
              photoIndex={photoIndex}
              closeModal={closeModal}
              photoCount={photos.photo.length}

            />
          </div>
        </div>
      </div>
    );
  }
}

export default FocusedImagesModal;
