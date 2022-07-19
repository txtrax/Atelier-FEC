import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

// const { buildRatingBreakDown } = require('./services/starRating');

const Bar = styled.div`
  display: flex;
  padding-top: 0.5em;
  padding-bottom: 0.5em;
  width: 100%;
  align-items: center;
  :hover {
    background-color:LightGray;
    opacity: 0.5;
  }
`;
const BarRating = styled.u`
  flex-grow: 2;
  padding-right: 0.5em;
`;
const BarProgress = styled.progress`
  flex-grow: 8;
`;

function StarBarEntry({
  reviews, count, stars, starFilter, setStarFilter,
}) {
  // const starBreakdown = buildRatingBreakDown(reviews);

  function setFilter(filter) {
    let tempStarFilter;
    if (starFilter.indexOf(filter) !== -1) {
      // if exist => remove from starFilter
      console.log('Filter ', filter, ' exist!');
      tempStarFilter = starFilter.filter((ele) => ele !== filter);
    } else {
      // if not exist => add to starFilter
      console.log('Filter not exist, ', filter);
      tempStarFilter = [...starFilter, filter];
    }
    console.log('tempStarFilter = ', tempStarFilter);
    setStarFilter(tempStarFilter);
  }

  const strNumMap = {
    five: 5,
    four: 4,
    three: 3,
    two: 2,
    one: 1,
  };

  return (
    <Bar
      value={strNumMap[stars]}
      onClick={(e) => setFilter(e.currentTarget.attributes.value.value)}
      aria-hidden="true"
    >
      <BarRating>{`${strNumMap[stars]}stars`}</BarRating>
      <BarProgress value={count} max={reviews.length} />
    </Bar>
  );
}

StarBarEntry.propTypes = {
  reviews: PropTypes.arrayOf(
    PropTypes.oneOfType([PropTypes.any]),
  ),
  stars: PropTypes.string,
  count: PropTypes.number,
  starFilter: PropTypes.arrayOf(
    PropTypes.string,
  ),
  setStarFilter: PropTypes.func,
};

StarBarEntry.defaultProps = {
  reviews: [],
  stars: '',
  count: 0,
  starFilter: [],
  setStarFilter: (e) => e,
};

export default StarBarEntry;
