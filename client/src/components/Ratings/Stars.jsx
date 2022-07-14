import React from 'react';
import PropTypes from 'prop-types';
import ReactStars from 'react-stars';

function Stars({ reviews }) {
  function toAverageRating() {
    let count = 0;
    if (reviews.length !== 0) {
      return reviews.reduce((partialSum, cur) => {
        count += 1;
        return partialSum + cur.rating;
      }, 0) / count;
    }
    return count;
  }
  function toAverageRecommendation() {
    let count = 0;
    if (reviews.length !== 0) {
      return Math.floor((reviews.filter((review) => {
        count += 1;
        return review.recommend;
      }, 0).length * 100) / count);
    }
    return count;
  }

  const averageRating = toAverageRating();
  const averageRecommendation = toAverageRecommendation();

  return (
    <div>
      <div>RATINGS &amp; REVIEWS</div>
      <div>
        <span>
          {averageRating}
        </span>
        <ReactStars count={5} value={averageRating} color2="#ffd700" edit={false} />
        {/* "#575a55" */}
      </div>
      <div>
        {averageRecommendation}
        % of reviews recommend this product
      </div>
      <div>
        <div>5 stars</div>
        <div>4 stars</div>
        <div>3 stars</div>
        <div>2 stars</div>
        <div>1 stars</div>
      </div>
    </div>
  );
}

Stars.propTypes = {
  reviews: PropTypes.arrayOf(
    PropTypes.objectOf(PropTypes.any),
  ),
};

Stars.defaultProps = {
  reviews: [],
};

export default Stars;
