/* eslint-disable camelcase */
import { React, useState } from 'react';
import PropTypes from 'prop-types';
import ReactStars from 'react-stars';
import { GrCheckmark } from 'react-icons/gr';
import moment from 'moment';

function ReviewEntry({ review }) {
  const {
    body, date, helpfulness, photos, rating, recommend, response, reviewer_name, summary,
  } = review;

  // const [displayBody, setDisplayBody] = useState('');

  const [modalOpen, setModalOpen] = useState(false);

  const lengthFilter = (string, len) => {
    if (string && typeof string === 'string' && string.length > len) {
      return `${string.substring(0, len)}...`;
    }
    return string;
  };

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
        <div>{lengthFilter(body, 250)}</div>
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
        <ReactStars count={5} value={rating} color2="#ffd700" edit={false} />
        <span>
          { reviewer_name }
          ,&nbsp;
        </span>
        <span>
          {moment(date).utc().format('MMMM DD, YYYY')}
        </span>
      </div>
      <b>
        {lengthFilter(summary, 60)}
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
  review: PropTypes.objectOf(PropTypes.shape()),
  // key: PropTypes.number,
};

ReviewEntry.defaultProps = {
  review: [],
  // key: 0,
};

export default ReviewEntry;
