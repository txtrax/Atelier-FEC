import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Select } from './styles';
import ReviewEntry from './ReviewEntry';

const ReviewContainer = styled.div`
  padding-top: 3.1em;
  height: 100%;
`;
const Header = styled.div`
  font-size: 1.5em;
  font-weight: bolder;
  padding-bottom: 1.5em;
`;
const SortBy = styled(Select)`

`;
const ReviewListContainer = styled.div`
  overflow-y: scroll;
  height: 500px;
`;
function ReviewList({
  reviews, displayedReviews, setSort, showPhoto, setShowPhoto, setPhotoURL,
}) {
  return (
    <ReviewContainer>
      <Header>
        <span>
          {reviews.length}
          &nbsp;reviews, sorted by&nbsp;
        </span>
        <SortBy onChange={(e) => setSort(e.target.value)}>
          <option value="relevant">relevance</option>
          <option value="newest">newset</option>
          <option value="helpful">helpful</option>
        </SortBy>
      </Header>
      <ReviewListContainer>
        {displayedReviews.map(
          (review) => (
            <ReviewEntry
              review={review}
              setShowPhoto={setShowPhoto}
              setPhotoURL={setPhotoURL}
              key={review.review_id}
            />
          ),
        )}
      </ReviewListContainer>
    </ReviewContainer>
  );
}

ReviewList.propTypes = {
  reviews: PropTypes.arrayOf(
    PropTypes.objectOf(PropTypes.any),
  ),
  displayedReviews: PropTypes.arrayOf(
    PropTypes.objectOf(PropTypes.any),
  ),
  // sort: PropTypes.string,
  setSort: PropTypes.func,
};

ReviewList.defaultProps = {
  reviews: [],
  displayedReviews: [],
  // sort: 'relevant',
  setSort: (e) => e,
};

export default ReviewList;
