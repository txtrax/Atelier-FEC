import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import StarRating from 'react-star-ratings';
import StarBarEntry from './StarBarEntry';

const { buildRatingBreakDown } = require('./services/starRating');

const starRating = require('./services/starRating');

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
const Filter = styled.div`
  font-style: italic;
  font-weight: bold;
  padding-top: 1em;
  padding-bottom: 0.5em;
`;
function RatingBreakdown({
  reviews, starFilter, setStarFilter, setDisplayedReviews,
}) {
  useEffect(() => {
    const filteredReviews = reviews.filter(
      (review) => starFilter.forEach((filter) => review.rating === filter),
    );
    setDisplayedReviews(
      filteredReviews,
    );
  }, [starFilter]);

  const averageRating = starRating.toAverageRating(reviews);
  const averageRecommendation = starRating.toAverageRecommendation(reviews);
  const starBreakdown = buildRatingBreakDown(reviews);

  let displayFilter;
  if (starFilter.length !== 0) {
    const filter = starFilter.join(', ');
    displayFilter = `Filter for ${filter} stars applyed`;
  }

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
        {Object.keys(starBreakdown).map(
          (key) => (
            <StarBarEntry
              reviews={reviews}
              count={starBreakdown[key]}
              stars={key}
              starFilter={starFilter}
              setStarFilter={setStarFilter}
              key={key}
            />
          ),
        )}
      </div>
      <Filter>{displayFilter}</Filter>
    </StarContainer>
  );
}

RatingBreakdown.propTypes = {
  reviews: PropTypes.arrayOf(
    PropTypes.oneOfType([PropTypes.any]),
  ),
  starFilter: PropTypes.arrayOf(
    PropTypes.string,
  ),
  setStarFilter: PropTypes.func,
  // displayedReviews: PropTypes.arrayOf(
  //   PropTypes.objectOf(PropTypes.any),
  // ),
  setDisplayedReviews: PropTypes.func,
};

RatingBreakdown.defaultProps = {
  reviews: [],
  starFilter: [],
  setStarFilter: (e) => e,
  // displayedReviews: [],
  setDisplayedReviews: (e) => e,
};

export default RatingBreakdown;
