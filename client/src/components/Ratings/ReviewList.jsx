import React from 'react';
import PropTypes from 'prop-types';
import ReviewEntry from './ReviewEntry';

function ReviewList({ reviews }) {
  return (
    <div>
      <div>
        <span>
          {reviews.length}
          &nbsp;reviews, sorted by
        </span>
        <select>
          {/* implement sort */}
        </select>
      </div>
      <ul>
        {reviews.map((review) => <ReviewEntry review={review} key={review.review_id} />)}
      </ul>
    </div>
  );
}

ReviewList.propTypes = {
  reviews: PropTypes.arrayOf(
    PropTypes.objectOf(PropTypes.any),
  ),
};

ReviewList.defaultProps = {
  reviews: [],
};

export default ReviewList;
