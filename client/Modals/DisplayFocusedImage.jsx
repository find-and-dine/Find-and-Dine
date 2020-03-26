/* eslint-disable react/prop-types */
import React, { Component } from 'react';

import ImageDisplay from './ImageDisplay';
import OnHoverModal from '../HoverModals/OnHoverModal';
import DisplaySidebar from './DisplaySidebar';


class DisplayFocusedImage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dynamicPhotoIndex: props.photoIndex,
      toggleHoverModal: true,
    };
    this.leftButtonClickHandler = this.leftButtonClickHandler.bind(this);
    this.rightButtonClickHandler = this.rightButtonClickHandler.bind(this);
    this.toggleHoverModal = this.toggleHoverModal.bind(this);
    this.handleImageClick = this.handleImageClick.bind(this);
  }

  leftButtonClickHandler() {
    const { closeModal } = this.props;
    const { dynamicPhotoIndex } = this.state;
    if(dynamicPhotoIndex > 0) {
      this.setState({
        dynamicPhotoIndex: dynamicPhotoIndex - 1,
      });
    }else{closeModal()}
  }
//TODO need .length
  rightButtonClickHandler() {
    const { closeModal, photoCount } = this.props;
    const { dynamicPhotoIndex } = this.state;
    if(dynamicPhotoIndex < photoCount - 1) {
      this.setState({
        dynamicPhotoIndex: dynamicPhotoIndex + 1,
      });
    }else{ closeModal()}
  }
  //FIX
  toggleHoverModal() {
    const { toggleHoverModal } = this.state;
    this.setState({
      toggleHoverModal: toggleHoverModal,
    });
  }

  handleImageClick(selectedPhoto) {
    this.setState({
      dynamicPhotoIndex: selectedPhoto,
    });
  }

  render() {

    const { photos } = this.props;
    const totalPhotos = photos.length;
    const { photo } = photos;
    const { dynamicPhotoIndex, toggleHoverModal } = this.state;

    if (toggleHoverModal === true) {
      return (
        <div className="image-gallery-modal-container">
          <ImageDisplay
            image={photo[dynamicPhotoIndex]}
          />
          <div className="sidebar-column">
            <DisplaySidebar
              photo={photo}
              photoIndex={dynamicPhotoIndex}
            />
          </div>
          <div
            id="image-black-background"
          />
          <div
            className="image-onHover-modal-container"
            onMouseLeave={this.toggleHoverModal}
          >
            <OnHoverModal
              photos={photos}
              handleImageClick={this.handleImageClick}
              photoIndex={dynamicPhotoIndex}
              image={photo[dynamicPhotoIndex]}
              leftClick={this.leftButtonClickHandler}
              rightClick={this.rightButtonClickHandler}
            />
          </div>
        </div>
      );
    }
    return (
      <div className="image-gallery-modal-container">
        <ImageDisplay
          image={photo[dynamicPhotoIndex]}
        />
        <div className="sidebar-column">
          <DisplaySidebar
            photo={photo}
            photoIndex={dynamicPhotoIndex}
          />
        </div>
        <div
          className="image-onHover-modal-container"
          onMouseEnter={this.toggleHoverModal}
        >
          {null}
        </div>
      </div>
    );
  }
}

export default DisplayFocusedImage;
