import React from 'react';
import PropTypes from 'prop-types';

const strFilter = require('./services/strFilter');

function ReviewEntrySummary({ summary }) {
  return (
    <div>
      {strFilter.lengthFilter(summary, 60)}
    </div>
  );
}

ReviewEntrySummary.propTypes = {
  summary: PropTypes.string,
};

ReviewEntrySummary.defaultProps = {
  summary: '',
};

export default ReviewEntrySummary;
