import React, { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Star from './Star';
import { AddReviewHeader } from './styles';

function AddReviewOverall({ displayRating, setDisplayRating }) {
  return (
    <div>
      <AddReviewHeader>Overall rating&#42;</AddReviewHeader>
      {[1, 2, 3, 4, 5].map((ele) => (
        <Star
          filled={ele <= displayRating}
          key={ele}
          onClick={() => setDisplayRating(ele)}
        />
      ))}
    </div>
  );
}

// Star.propTypes = {
//   filled: PropTypes.bool,
//   onClick: PropTypes.func,
// };

// Star.defaultProps = {
//   onClick: (e) => e,
//   filled: false,
// };

export default AddReviewOverall;
