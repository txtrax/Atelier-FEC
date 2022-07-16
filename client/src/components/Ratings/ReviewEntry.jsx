/* eslint-disable camelcase */
import { React, useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import StarRating from 'react-star-ratings';
import { GrCheckmark } from 'react-icons/gr';
import moment from 'moment';

const strFilter = require('./common/strFilter');

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

const Button = styled.button`
  border: none;
  background: none;
  text-decoration: underline;
  font-weight: normal;
`;

function ReviewEntry({ review }) {
  const {
    body, date, helpfulness, photos, rating, recommend, response, reviewer_name, summary,
  } = review;

  // const [displayBody, setDisplayBody] = useState('');
  let displayBody;
  if (body.length > 250) {
    // setDisplayBody(
    displayBody = (
      <div>
        <div>{strFilter.lengthFilter(body, 250)}</div>
        <button type="button">Show More</button>
      </div>
    );
  } else {
    // setDisplayBody(
    displayBody = (
      <div>{body}</div>
    );
  }

  let displayPhotos;
  if (photos.length > 0) {
    displayPhotos = (
      <div>
      </div>
    );
  }

  let recommendation;
  if (recommend) {
    recommendation = (
      <div>
        <div>
          <GrCheckmark />
          &nbsp;
          I recommend this product
        </div>
      </div>
    );
  }

  return (
    <EntryContainer>
      <TopBar>
        <StarRating numberOfStars={5} rating={rating} starRatedColor="#ffd700" starSpacing="1px" starDimension="20px" isSelectable={false} />
        <span>
          { reviewer_name }
          ,&nbsp;
          {moment(date).utc().format('MMMM DD, YYYY')}
        </span>
      </TopBar>
      <Header>
        {strFilter.lengthFilter(summary, 60)}
      </Header>
      <Body>
        {displayBody}
        {/* {console.log(buildThumbnails(photos))} */}
        {displayPhotos}
      </Body>
      <Recommendation>
        {recommendation}
      </Recommendation>
      <BottomBar>
        <span>
          Helpful?&nbsp;
          <Button type="submit">Yes</Button>
          &#40;
          {helpfulness}
          &#41; |&nbsp;
          <Button type="submit">Report</Button>
        </span>
      </BottomBar>
    </EntryContainer>
  );
}

ReviewEntry.propTypes = {
  review: PropTypes.objectOf(PropTypes.oneOfType([PropTypes.any])),
  // key: PropTypes.number,
};

ReviewEntry.defaultProps = {
  review: [],
  // key: 0,
};

export default ReviewEntry;
