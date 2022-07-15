/* eslint-disable camelcase */
import { React, useState } from 'react';
import PropTypes from 'prop-types';
import StarRating from 'react-star-ratings';
import { GrCheckmark } from 'react-icons/gr';
import moment from 'moment';

const strFilter = require('./common/strFilter');

function ReviewEntry({ review }) {
  const {
    body, date, helpfulness, photos, rating, recommend, response, reviewer_name, summary,
  } = review;

  // const [displayBody, setDisplayBody] = useState('');

  const buildThumbnails = (images) => images.map((image) => {
    const imageObj = {};
    imageObj.source = image.url;
    return imageObj;
  });

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
        <div>
          <span>Response:</span>
        </div>
      </div>
    );
  }

  return (
    <div>
      <div>
        <StarRating numberOfStars={5} rating={rating} starRatedColor="#ffd700" starSpacing="1px" starDimension="20px" isSelectable={false} />
        <span>
          { reviewer_name }
          ,&nbsp;
        </span>
        <span>
          {moment(date).utc().format('MMMM DD, YYYY')}
        </span>
      </div>
      <b>
        {strFilter.lengthFilter(summary, 60)}
      </b>
      <div>
        {displayBody}
        {/* {console.log(buildThumbnails(photos))} */}
        {displayPhotos}
      </div>
      {recommendation}
      <div>
        <span>
          Helpful?&nbsp;
          <button type="submit">Yes</button>
          &#40;
          {helpfulness}
          &#41; |&nbsp;
          <button type="submit">Report</button>
        </span>
      </div>
    </div>
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
