import React from 'react';

function Carousel({
  photoIndex, images, photos, handleImageClick,
}) {
  const { photo } = photos;
  const photoArray = [];
  let accum = 0;
  photo.map((image, index) => {
    photoArray.push(
      <img
        className="image-carousel"
        src={image.url}
        key={`${accum += 1}imageKey`}
        onClick={() => { handleImageClick(index); }}
        alt={image.caption}
        height="75px"
        width="auto"
      />,
    );
  });
  return (
    <div id="image-carousel-container">
      {photoArray}
    </div>
  );
}


export default Carousel;
