import React from 'react';
import PropTypes from 'prop-types';
import ReactStars from 'react-stars';

function ReviewEntry({ review }) {
  const { rating } = review;
  const date = Date.parse(review.date);
  let recommendation;
  if (review.recommend) {
    recommendation = (
      <div>
        <div>I recommend this product</div>
        <div>
          <span>Response:</span>
        </div>
      </div>
    );
  }

  return (
    <div>
      <div>
        <ReactStars count={5} value={rating} color2="#ffd700" half="true" edit="false" />
        {/* "#575a55" */}
        <span>
          {review.reviewer_name}
          ,&nbsp; | &nbsp;
        </span>
        <span>
          Date
          {date}
        </span>
      </div>
      <div>
        {review.summary}
      </div>
      <div>
        {review.body}
      </div>
      {recommendation}
      <div>
        <span>
          Helpful?&nbsp;
          <button type="submit">Yes</button>
          &#40;
          {review.helpfulness}
          &#41; |&nbsp;
          <button type="submit">Report</button>
        </span>
      </div>
    </div>
  );
}

ReviewEntry.propTypes = {
  review: PropTypes.objectOf(PropTypes.shape()),
};

ReviewEntry.defaultProps = {
  review: [],
};

export default ReviewEntry;
