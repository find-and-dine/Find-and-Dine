/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import GridMosaic from './GridMosaic';

class ImageMosaic extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { photos, openModal } = this.props;
    const { photo } = photos[0];
    return (
      <div className="grid_mosaic">
        <GridMosaic
          photo={photo}
          openModal={openModal}
        />
      </div>
    );
  }
}

export default ImageMosaic;
