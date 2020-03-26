/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React from 'react';

const GridMosaic = ({ photo, openModal }) => {
  const items = [];

  for (let i = 0; i < 6; i += 1) {
    items.push(
      <div className={`box${i}`}>
        <img
          key={`${i}value`}
          className="image-mosaic"
          src={photo[i].url}
          alt="Error"
          onClick={() => { openModal(i); }}
        />
      </div>,
    );
  }
  return items;
};

export default GridMosaic;
