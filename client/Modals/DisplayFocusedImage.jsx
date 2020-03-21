/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import ImageDisplay from './ImageDisplay';
import OnHoverModal from '../HoverModals/OnHoverModal';

class DisplayFocusedImage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dynamicPhotoIndex: props.photoIndex,
      //FIX toggleHoverModal
      toggleHoverModal: false,
    };
    this.leftButtonClickHandler = this.leftButtonClickHandler.bind(this);
    this.rightButtonClickHandler = this.rightButtonClickHandler.bind(this);
    this.toggleHoverModal = this.toggleHoverModal.bind(this);
    // this.toggleOnHoverState = this.toggleOnHoverState.bind(this);
  }

  leftButtonClickHandler() {
    const { dynamicPhotoIndex } = this.state;
    this.setState({
      dynamicPhotoIndex: dynamicPhotoIndex - 1,
    });
  }

  rightButtonClickHandler() {
    const { dynamicPhotoIndex } = this.state;
    this.setState({
      dynamicPhotoIndex: dynamicPhotoIndex + 1,
    });
  }
  //FIX ! in setState

  toggleHoverModal() {
    console.log('this.state.index', );
    const { toggleHoverModal } = this.state;
    console.log('this.state.index', toggleHoverModal);
    this.setState({
      toggleHoverModal: !toggleHoverModal,
    });
  }

  //TODO: Use conditional rendering to Display overlay
  render() {
    const { photos } = this.props;
    const { dynamicPhotoIndex, toggleHoverModal } = this.state;
    const image = photos[0].photo[dynamicPhotoIndex];
    if (toggleHoverModal === true) {
      return (
        <div className="image-gallery-modal-container">
          <ImageDisplay
            image={image}
          />
          <div
            id="image-black-background"
          />
          <div
            className="image-onHover-modal-container"
            onMouseLeave={this.toggleHoverModal}
          >
            <OnHoverModal
              photos={photos}
              photoIndex={dynamicPhotoIndex}
              image={image}
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
          image={image}
        />
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
