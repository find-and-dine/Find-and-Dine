/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import ReactDOM from 'react-dom';
import path from 'path';
import App from './components/App';

ReactDOM.render(
  <App id={path.basename(window.document.URL)} />, document.getElementById('app'),
);
