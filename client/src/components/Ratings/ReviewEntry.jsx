/* eslint-disable camelcase */
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import StarRating from 'react-star-ratings';
import moment from 'moment';
// import BuildReviewBody from './services/buildReviewBody';
import ReviewEntrySummary from './ReviewEntrySummary';
import ReviewEntryBody from './ReviewEntryBody';
import ReviewEntryPhoto from './ReviewEntryPhoto';
import ReviewEntryRecommend from './ReviewEntryRecommend';
import ReviewEntryHelpful from './ReviewEntryHelpful';

const EntryContainer = styled.div`
  border-bottom: 1px solid;
  margin-bottom: 1em;
`;

const TopBar = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1em;
`;

const Header = styled.div`
  font-size: 1.5em;
  font-weight: bolder;
  margin-bottom: 1em;
`;

const Body = styled.div`
  margin-bottom: 1em;
`;

const Recommendation = styled.div`
  margin-bottom: 1em;
`;

const BottomBar = styled.div`
  margin-bottom: 1em;
`;

function ReviewEntry({ review }) {
  const {
    summary, body, photos, recommend, date, helpfulness, rating, review_id, reviewer_name,
  } = review;

  return (
    <EntryContainer>
      <TopBar>
        <StarRating numberOfStars={5} rating={rating} starRatedColor="#ffd700" starSpacing="1px" starDimension="20px" isSelectable={false} />
        <span>
          {reviewer_name}
          ,&nbsp;
          {moment(date).utc().format('MMMM DD, YYYY')}
        </span>
      </TopBar>
      <Header>
        <ReviewEntrySummary summary={summary} />
      </Header>
      <Body>
        <ReviewEntryBody body={body} />
        <ReviewEntryPhoto photos={photos} />
      </Body>
      <Recommendation>
        <ReviewEntryRecommend recommend={recommend} />
      </Recommendation>
      <BottomBar>
        <ReviewEntryHelpful review_id={review_id} helpfulness={helpfulness} />
      </BottomBar>
    </EntryContainer>
  );
}

ReviewEntry.propTypes = {
  review: PropTypes.objectOf(PropTypes.oneOfType([PropTypes.any])),
};

ReviewEntry.defaultProps = {
  review: [],
};

export default ReviewEntry;
