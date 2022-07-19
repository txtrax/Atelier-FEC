import React from 'react';
import PropTypes from 'prop-types';

function ReviewEntryPhoto({ photos }) {
  let displayPhotos;

  if (photos.length > 0) {
    displayPhotos = (
      <div>
        !!!TO RENDER IMAGES!!!
      </div>
    );
  }

  return (
    <div>
      {displayPhotos}
    </div>
  );
}

ReviewEntryPhoto.propTypes = {
  photos: PropTypes.arrayOf(
    PropTypes.objectOf(PropTypes.any),
  ),
};

ReviewEntryPhoto.defaultProps = {
  photos: [],
};

export default ReviewEntryPhoto;
