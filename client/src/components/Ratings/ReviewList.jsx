import React from 'react';
import PropTypes from 'prop-types';
import ReviewEntry from './ReviewEntry';

function ReviewList({
  reviews, displayedReviews, setSort,
}) {
  return (
    <div>
      <div>
        <span>
          {reviews.length}
          &nbsp;reviews, sorted by&nbsp;
        </span>
        <select onChange={(e) => setSort(e.target.value)}>
          <option value="relevant">relevance</option>
          <option value="newest">newset</option>
          <option value="helpful">helpful</option>
          {/* implement sort */}
        </select>
      </div>
      <ul>
        {displayedReviews.map((review) => <ReviewEntry review={review} key={review.review_id} />)}
      </ul>
    </div>
  );
}

ReviewList.propTypes = {
  reviews: PropTypes.arrayOf(
    PropTypes.objectOf(PropTypes.any),
  ),
  displayedReviews: PropTypes.arrayOf(
    PropTypes.objectOf(PropTypes.any),
  ),
  // sort: PropTypes.string,
  setSort: PropTypes.func,
};

ReviewList.defaultProps = {
  reviews: [],
  displayedReviews: [],
  // sort: 'relevant',
  setSort: (e) => e,
};

export default ReviewList;
