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
    // background-color:#ffcc33;
    // opacity: 0.5;
    // border-radius: 6px;
    // padding-right: 0.5em;
    // padding-left: 0.5em;
    // color: white;
    cursor: pointer;
    text-decoration: underline;
  }
`;
const BarRating = styled.div`
  flex-grow: 2;
  padding-right: 0.5em;
`;
const BarProgress = styled.progress`
  -webkit-appearance: none;
  appearance: none;
  height: 6px;
  flex-grow: 8;
  ::-webkit-progress-value {
    background-color: #575b54;
    border-radius: 2px;
  }
  ::-webkit-progress-bar {
    background-color: #d3d3d3;
    border-radius: 2px;
  }
`;

function StarBarEntry({
  reviews, count, stars, starFilter, setStarFilter,
}) {
  // const starBreakdown = buildRatingBreakDown(reviews);

  function setFilter(filter) {
    let tempStarFilter;
    if (starFilter.indexOf(filter) !== -1) {
      // if exist => remove from starFilter
      // console.log('Filter ', filter, ' exist!');
      tempStarFilter = starFilter.filter((ele) => ele !== filter);
    } else {
      // if not exist => add to starFilter
      // console.log('Filter not exist, ', filter);
      tempStarFilter = [...starFilter, filter];
    }
    // console.log('tempStarFilter = ', tempStarFilter);
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
  setShowPhoto: PropTypes.func,
};

StarBarEntry.defaultProps = {
  reviews: [],
  stars: '',
  count: 0,
  starFilter: [],
  setStarFilter: (e) => e,
  setShowPhoto: (e) => e,
};

export default StarBarEntry;
