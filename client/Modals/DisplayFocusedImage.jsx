/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import ImageDisplay from './ImageDisplay';
import OnHoverModal from '../HoverModals/OnHoverModal';

class DisplayFocusedImage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dynamicPhotoIndex: props.photoIndex,
      toggleHoverModal: false,
    };
    this.leftButtonClickHandler = this.leftButtonClickHandler.bind(this);
    this.rightButtonClickHandler = this.rightButtonClickHandler.bind(this);
    this.toggleHoverModal = this.handleOnHover.bind(this);
    this.toggleOnHoverState = this.toggleOnHoverState.bind(this);
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

  handleOnHover() {
    console.log('this.state.index', this.state.dynamicPhotoIndex)
    this.setState(this.toggleOnHoverState);
  }

  toggleOnHoverState() {
    const { toggleHoverModal } = this.state;
    return {
      toggleHoverModal: !toggleHoverModal,
    };
  }

  render() {
    const { photos } = this.props;
    const { dynamicPhotoIndex } = this.state;
    const image = photos[0].photo[dynamicPhotoIndex];

    return (
      <div className="image-gallery-modal-container">
        <ImageDisplay
          image={image}
        />
        <div
          className="image-onHover-modal-container"
        >
          <OnHoverModal
            photoIndex={dynamicPhotoIndex}
            image={image}
            leftClick={this.leftButtonClickHandler}
            rightClick={this.rightButtonClickHandler}
          />
          <div
            className="image-hover-section"
            onMouseEnter={this.toggleHoverModal}
            onMouseLeave={this.toggleHoverModal}
          >
            {null}
          </div>
        </div>
      </div>
    );
  }
}

export default DisplayFocusedImage;
