/* eslint-disable no-console */
import React, { Component } from 'react';
import axios from 'axios';
import ImageMosaic from './ImageMosaic';
import FocusedImagesModal from '../Modals/FocusedImagesModal';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      photos: [],
      photosLoaded: false,
      photoModal: false,
      photoIndex: 0,
    };
    this.clickImageModal = this.clickImageModal.bind(this);
    this.exitImageModal = this.exitImageModal.bind(this);
  }

  componentDidMount() {
    axios.get('/photos/34')
      .then((response) => (this.setState({ photos: response.data, photosLoaded: true })))
      .catch((err) => console.log(err));
  }

  clickImageModal(photo) {
    this.setState({
      photoModal: true,
      photoIndex: photo,

    });
  }

  exitImageModal() {
    this.setState({
      photosLoaded: true,
      photoModal: false,

    });
  }

  render() {
    const {
      photos, photosLoaded, photoModal, photoIndex,
    } = this.state;
    return (
      <div>
        <div className="image_mosaic">
          {photosLoaded ? (
            <ImageMosaic
              photos={photos}
              openModal={this.clickImageModal}
            />
          )
            : <div>{null}</div>}
        </div>
        <div id="focused_image_viewer">
          {photoModal ? (
            <FocusedImagesModal
              closeModal={this.exitImageModal}
              photoIndex={photoIndex}
              photos={photos}
            />
          )
            : <div>{null}</div>}
        </div>
      </div>
    );
  }
}

export default App;
