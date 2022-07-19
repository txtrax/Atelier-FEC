import React from 'react';
import PropTypes from 'prop-types';
import { GrCheckmark } from 'react-icons/gr';

function ReviewEntryRecommend({ recommend }) {
  let displayRecommend;
  if (recommend) {
    displayRecommend = (
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
    <div>
      {displayRecommend}
    </div>
  );
}

ReviewEntryRecommend.propTypes = {
  recommend: PropTypes.bool,
};

ReviewEntryRecommend.defaultProps = {
  recommend: false,
};

export default ReviewEntryRecommend;
