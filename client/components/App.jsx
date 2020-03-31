/* eslint-disable no-console */
import React, { Component } from 'react';
import axios from 'axios';
import ImageMosaic from './ImageMosaic';
import FocusedImagesModal from '../Modals/FocusedImagesModal';

class App extends Component {
  constructor(props) {
    super(props);
    const { id } = this.props;
    this.state = {
      id,
      photos: [],
      photosLoaded: false,
      photoModal: false,
      photoIndex: 0,
    };
    this.clickImageModal = this.clickImageModal.bind(this);
    this.exitImageModal = this.exitImageModal.bind(this);
  }

  componentDidMount() {
    const { id } = this.state;
    axios.get(`/photos/${id}`).then()
      .then((response) => (this.setState({ photos: response.data[0], photosLoaded: true })))
      .catch((err) => console.log(err));
  }

  clickImageModal(photoIndex) {
    this.setState({
      photoModal: true,
      photoIndex,

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
        <div className="image-mosaic">
          {photosLoaded ? (
            <ImageMosaic
              photos={photos}
              openModal={this.clickImageModal}
            />
          )
            : null}
        </div>
        <div id="focused-image-viewer">
          {photoModal ? (
            <FocusedImagesModal
              closeModal={this.exitImageModal}
              photoIndex={photoIndex}
              photos={photos}
            />
          )
            : null}
        </div>
      </div>
    );
  }
}

export default App;
