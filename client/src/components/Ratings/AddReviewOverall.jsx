import React, { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Star from './Star';
import { AddReviewHeader } from './styles';

const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  padding-bottom: 1em;
`;

const Stars = styled.div`
  display: flex;
`;
const Note = styled.div`
  font-style: italic;
  font-size: 1.2em;
  font-weight: bolder;
`;
function AddReviewOverall({ displayRating, setDisplayRating }) {
  const StarDes = {
    1: 'Poor',
    2: 'Fair',
    3: 'Average',
    4: 'Good',
    5: 'Great',
  };
  let displayNote;
  if (displayRating) {
    const note = StarDes[displayRating];
    displayNote = (
      <Note>{`${note}`}</Note>
    );
  }

  return (
    <div>
      <AddReviewHeader>Overall rating&#42;</AddReviewHeader>
      <Container>
        <Stars>
          {[1, 2, 3, 4, 5].map((ele) => (
            <Star
              filled={ele <= displayRating}
              key={ele}
              onClick={() => setDisplayRating(ele)}
            />
          ))}
        </Stars>
        {displayNote}
      </Container>
    </div>
  );
}

AddReviewOverall.propTypes = {
  displayRating: PropTypes.number,
  setDisplayRating: PropTypes.func,
};

AddReviewOverall.defaultProps = {
  displayRating: 0,
  setDisplayRating: (e) => e,
};

export default AddReviewOverall;
