import React from 'react';
import StarRatings from 'react-star-ratings';

function StarRating() {
  const rating = 3.75;
  const starRating = Math.round(rating * 4) / 4;
  return (
    <StarRatings rating={starRating} starDimension="16px" starSpacing="1px" starRatedColor="#5D5F71" />
  );
}

export default StarRating;
