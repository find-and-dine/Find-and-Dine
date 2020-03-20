/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import ImageDisplay from './ImageDisplay';
import LeftButton from './LeftButton';
import RightButton from './RightButton';

class DisplayFocusedImage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dynamicPhotoIndex: 0,
      onHoverModal: false,
    };
    this.leftButtonClickHandler = this.leftButtonClickHandler.bind(this);
    this.rightButtonClickHandler = this.rightButtonClickHandler.bind(this);
    this.onHoverModal = this.handleOnHover.bind(this);
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
    alert('Move on or hover over dude')
    this.setState(this.toggleOnHoverState);
  }

  toggleOnHoverState() {
    const { onHoverModal } = this.state;
    return {
      onHoverModal: !onHoverModal,
    };
  }

  render() {
    const { photos } = this.props;
    const { dynamicPhotoIndex } = this.state;
    const image = photos[0].photo[dynamicPhotoIndex];
    return (
      <div className="image-gallery-modal-container">
        <div className="image-background"
          onMouseEnter={this.onHoverModal}
          onMouseLeave={this.onHoverModal}
        >
          {null}
        </div>
        <ImageDisplay
          image={image}
        />
        <div
          className="image-onHover-modal-container"
        >
          <div className="image-background"
            onMouseEnter={this.onHoverModal}
            onMouseLeave={this.onHoverModal}
          ></div>
          <LeftButton
            leftClick={this.leftButtonClickHandler}
          />
          <RightButton
            rightClick={this.rightButtonClickHandler}
          />

        </div>
        {/* TODO: Carousel */}
        <div className="image-carousel">
          {null}
        </div>
        <div className="image-gallery">
          {/* TODO: Gallery */}
        </div>
        <div className="image-helpful">
          {/* TODO: Helpful */}
        </div>
        <div className="image-report">
          {/* TODO: Report */}
        </div>

      </div>
    );
  }
}

export default DisplayFocusedImage;
