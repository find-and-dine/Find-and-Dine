/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import DisplayFocusedImage from './DisplayFocusedImage';
import DisplaySidebar from './DisplaySidebar';

const modalRoot = document.getElementById('modal-root');

class FocusedImagesModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
    this.modal = document.createElement('div');
  }

  componentDidMount() {
    modalRoot.appendChild(this.modal);
  }

  componentWillUnmount() {
    modalRoot.removeChild(this.modal);
  }

  render() {
    const { closeModal, photos, photoIndex } = this.props;
    return ReactDOM.createPortal(
      <div>
        <div className="image-gallery-modal-container">

          <div className="top-bar-exit-container">
            <button
              onClick={closeModal}
              type="button"
              id="exit-button"
            >
              &times;
            </button>
          </div>

          <div className="sidebar-column">

            <DisplaySidebar
              photos={photos}
            />
          </div>
          <div className="image-gallery-modal-container">
            <DisplayFocusedImage
              photos={photos}
              photoIndex={photoIndex}
            />
          </div>
        </div>
      </div>,
      this.modal,
    );
  }
}

export default FocusedImagesModal;
