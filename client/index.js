/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import ReactDOM from 'react-dom';
import path from 'path';

import App from './components/App';
import './styles.css';



ReactDOM.render( <App id={path.basename(document.URL)} />, document.getElementById('image-gallery'),
);
