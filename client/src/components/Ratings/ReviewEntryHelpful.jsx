/* eslint-disable camelcase */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const { markReviewHelpful, reportReview } = require('./services/reviews');

const Button = styled.button`
  border: none;
  background: none;
  text-decoration: underline;
  font-weight: normal;
`;

const Voted = styled.div`
  font-style: italic;
  font-weight: bold;
  padding-top: 1em;
  padding-bottom: 0.5em;
`;

// eslint-disable-next-line camelcase
function ReviewEntryHelpful({ review_id, helpfulness }) {
  const [voted, setVoted] = useState(false);
  const [displayVoted, setDisplayVoted] = useState(undefined);

  function handleClick(e) {
    if (voted) {
      setDisplayVoted('You have voted');
      return;
    }
    console.log('handleClick, e.target.value = ', e.target.value);
    console.log('handleClick, e.target.name = ', e.target.name);
    if (e.target.value === 'yes') {
      markReviewHelpful(e.target.name);
    } else {
      reportReview(e.target.name);
    }
    setVoted(true);
  }

  return (
    <div>
      Helpful?&nbsp;
      <Button type="submit" value="yes" name={review_id} onClick={(e) => handleClick(e)}>Yes</Button>
      &#40;
      {helpfulness}
      &#41; |&nbsp;
      <Button type="submit" value="report" name={review_id} onClick={(e) => handleClick(e)}>Report</Button>
      <Voted>
        {displayVoted}
      </Voted>
    </div>
  );
}

ReviewEntryHelpful.propTypes = {
  review_id: PropTypes.number,
  helpfulness: PropTypes.number,
};

ReviewEntryHelpful.defaultProps = {
  review_id: 0,
  helpfulness: 0,
};

export default ReviewEntryHelpful;
