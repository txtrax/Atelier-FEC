import React, { useState, useEffect } from 'react';
import { PropTypes } from 'prop-types';
import StarRatings from 'react-star-ratings';
import axios from 'axios';

function StarRating({ id }) {
  const [avg, setAvg] = useState(0);

  function getAvgRating() {
    axios.get(`/reviews/?product_id=${id}&sort=relevant`).then((res) => {
      if (res.data.results.length !== 0) {
        setAvg(res.data.results.reduce((partialSum, cur) => partialSum + cur.rating, 0)
        / res.data.results.length);
      }
    });
  }

  useEffect(() => {
    if (id) {
      getAvgRating();
    }
  }, []);

  if (id) {
    return (
      <StarRatings rating={avg} starDimension="16px" starSpacing="1px" starRatedColor="#5D5F71" />
    );
  }
}

StarRating.propTypes = {
  id: PropTypes.number,
};

StarRating.defaultProps = {
  id: 0,
};

export default StarRating;
