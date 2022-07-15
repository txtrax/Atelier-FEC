import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import StarRating from 'react-star-ratings';

function Stars({
  reviews, starFilter, setStarFilter, displayedReviews, setDisplayedReviews,
}) {
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

  function buildBreakDown() {
    // console.log('REVEIWS', reviews);
    const obj = {
      five: 0,
      four: 0,
      three: 0,
      two: 0,
      one: 0,
    };
    reviews.forEach((review) => {
      if (review.rating === 5) {
        obj.five += 1;
      }
      if (review.rating === 4) {
        obj.four += 1;
      }
      if (review.rating === 3) {
        obj.three += 1;
      }
      if (review.rating === 2) {
        obj.two += 1;
      }
      if (review.rating === 1) {
        obj.one += 1;
      }
    });
    return obj;
  }

  useEffect(() => {
    const filteredReviews = reviews.filter(
      (review) => starFilter.foreach((filter) => review.rating === filter),
    );
    console.log('Stars useEffect, starFilter', starFilter);
    setDisplayedReviews(
      filteredReviews,
    );
  }, [starFilter]);

  // useEffect(() => {
  //   // console.log('EFFECT!');
  //   buildBreakDown();
  // }, []);

  const averageRating = toAverageRating();
  const averageRecommendation = toAverageRecommendation();
  const starBreakdown = buildBreakDown();

  return (
    <div>
      <div>RATINGS &amp; REVIEWS</div>
      <div>
        <span>
          {averageRating}
          {/* <ReactStars count={5} value={averageRating} color2="#ffd700" edit={false} />
          "#575a55" */}
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
    </div>
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
