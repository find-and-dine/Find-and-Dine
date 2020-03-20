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
      onHooverModal: false,
    };
    this.leftButtonClickHandler = this.leftButtonClickHandler.bind(this);
    this.rightButtonClickHandler = this.rightButtonClickHandler.bind(this);
  }

  componentDidMount() {
    const { photoIndex } = this.props;
    this.setState({
      dynamicPhotoIndex: photoIndex,
    });
  }

  //TODO: add left and right click
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

  render() {
    const { photos, leftButtonClickHandler, rightButtonClickHandler } = this.props;
    const { dynamicPhotoIndex } = this.state;
    const image = photos[0].photo[dynamicPhotoIndex];
    return (
      <div className="image_gallery_modal_container">
        <ImageDisplay
          image={image}
        />
        <div className="image_onHover_modal_container">
          <LeftButton
            leftClick={this.leftButtonClickHandler}
          />
          <RightButton
            rightClick={this.rightButtonClickHandler}
          />
        </div>
        <div className="image_carousel">
          Carousel
        </div>
        <div className="image_gallery">
          Gallery
        </div>
        <div className="image_helpful">
          Helpful?
        </div>
        <div className="image_report">
          Report
        </div>

      </div>
    );
  }
}

export default DisplayFocusedImage;
