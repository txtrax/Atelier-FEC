import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import StarRating from 'react-star-ratings';

const starRating = require('./common/starRating');

const StarContainer = styled.div`
`;
const Header = styled.div`
  font-weight: bold;
  font-size: 1.2em;
  padding-bottom: 0.5em;
`;
const Rating = styled.div`
  display:flex;
  align-items: flex-start;
  padding-top: 0.5em;
  padding-bottom: 0.5em;
  gap: 10px;
`;
const RatingNum = styled.div`
  font-size: 3em;
  font-weight: bolder;
`;
const RatingStar = styled.div`
  padding-top: 0.5em;
`;
const Recommendation = styled.div`
  width: 100%;
  padding-top: 0.5em;
  padding-bottom: 0.5em;
`;
const Bar = styled.div`
  display: flex;
  padding-top: 0.5em;
  padding-bottom: 0.5em;
  width: 100%;
  align-items: center;
`;
const BarRating = styled.u`
  flex-grow: 2;
`;
const BarProgress = styled.progress`
  flex-grow: 8;
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
    <StarContainer>
      <Header>RATINGS &amp; REVIEWS</Header>
      <Rating>
        <RatingNum>
          {averageRating}
        </RatingNum>
        <RatingStar>
          <StarRating numberOfStars={5} rating={averageRating} starRatedColor="#ffd700" starSpacing="1px" starDimension="20px" isSelectable={false} />
        </RatingStar>
      </Rating>
      <Recommendation>
        {averageRecommendation}
        % of reviews recommend this product
      </Recommendation>
      <div>
        <Bar value="5" onClick={() => setStarFilter([5])} aria-hidden="true">
          <BarRating>5 stars</BarRating>
          <BarProgress value={starBreakdown.five} max={reviews.length} />
        </Bar>
        <Bar>
          <BarRating>4 stars</BarRating>
          <BarProgress value={starBreakdown.four} max={reviews.length} />
        </Bar>
        <Bar>
          <BarRating>3 stars</BarRating>
          <BarProgress value={starBreakdown.three} max={reviews.length} />
        </Bar>
        <Bar>
          <BarRating>2 stars</BarRating>
          <BarProgress value={starBreakdown.two} max={reviews.length} />
        </Bar>
        <Bar>
          <BarRating>1 stars</BarRating>
          <BarProgress value={starBreakdown.one} max={reviews.length} />
        </Bar>
      </div>
    </StarContainer>
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
