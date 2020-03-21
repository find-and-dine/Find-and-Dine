import React from 'react';

function Carousel({ photoIndex, images, photos }) {
  //const imagesArray = [];
  //Photo is one image
  //need to pass in photoArray

  console.log('Photos Car: ', photos);
  const { photo } = photos[0];
  console.log('Image Car: ', photo);
  const photoArray = [];
  let accum = 0;
  photo.map((image) => {
    photoArray.push(
      <img
        className="image-carousel"
        src={image.url}
        key={`${accum += 1}imageKey`}
        alt={image.caption}
        height="75px"
        width="75x"
      />);
  });
  return (
    <div id="image-carousel-container">
      {photoArray}
    </div>
  );
}


export default Carousel;
