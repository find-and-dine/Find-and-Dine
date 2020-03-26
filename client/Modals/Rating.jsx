/* eslint-disable radix */
import React from 'react';

function Rating({ photo, photoIndex }) {
  const { rating } = photo[photoIndex];
  const ratingsArray = [];
  const howManyStars = parseInt(rating);
  for (let i = 0; i < howManyStars; i += 1) {
    ratingsArray.push(
      <img src="https://guilttripadvisor-phonxay.s3.us-east-2.amazonaws.com/rating.png" alt="X" />,
    );
  }

  return ratingsArray;
}

export default Rating;
