import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import StarRating from 'react-star-ratings';

const starRating = require('./common/starRating');

const Wrapper = styled.div`
    padding 3em;
    background: papayawhip;
`;

function Stars({
  reviews, starFilter, setStarFilter, displayedReviews, setDisplayedReviews,
}) {
  useEffect(() => {
    const filteredReviews = reviews.filter(
      (review) => starFilter.forEach((filter) => review.rating === filter),
    );
    // console.log('Stars useEffect, starFilter', starFilter);
    setDisplayedReviews(
      filteredReviews,
    );
  }, [starFilter]);

  const averageRating = starRating.toAverageRating(reviews);
  const averageRecommendation = starRating.toAverageRecommendation(reviews);
  const starBreakdown = starRating.buildRatingBreakDown(reviews);

  return (
    <Wrapper>
      <div>RATINGS &amp; REVIEWS</div>
      <div>
        <span>
          {averageRating}
          <StarRating numberOfStars={5} rating={averageRating} starRatedColor="#ffd700" starSpacing="1px" starDimension="20px" isSelectable={false} />
        </span>
      </div>
      <div>
        {averageRecommendation}
        % of reviews recommend this product
      </div>
      <div>
        <div value="5" onClick={() => setStarFilter([5])} aria-hidden="true">
          5 stars&nbsp;
          <progress value={starBreakdown.five} max={reviews.length} />
        </div>
        <div>
          4 stars&nbsp;
          <progress value={starBreakdown.four} max={reviews.length} />
        </div>
        <div>
          3 stars&nbsp;
          <progress value={starBreakdown.three} max={reviews.length} />
        </div>
        <div>
          2 stars&nbsp;
          <progress value={starBreakdown.two} max={reviews.length} />
        </div>
        <div>
          1 stars&nbsp;
          <progress value={starBreakdown.one} max={reviews.length} />
        </div>
      </div>
    </Wrapper>
  );
}

Stars.propTypes = {
  reviews: PropTypes.arrayOf(
    PropTypes.oneOfType([PropTypes.any]),
  ),
  starFilter: PropTypes.arrayOf(
    PropTypes.number,
  ),
  setStarFilter: PropTypes.func,
  displayedReviews: PropTypes.arrayOf(
    PropTypes.objectOf(PropTypes.any),
  ),
  setDisplayedReviews: PropTypes.func,
};

Stars.defaultProps = {
  reviews: [],
  starFilter: [],
  setStarFilter: (e) => e,
  displayedReviews: [],
  setDisplayedReviews: (e) => e,
};

export default Stars;
