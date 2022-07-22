import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import ReviewEntryPhotoEntry from './ReviewEntryPhotoEntry';

const Photos = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 1em;
`;

function ReviewEntryPhoto({ photos, showPhoto, setShowPhoto, setPhotoURL }) {
  if (photos.length > 0) {
    return (
      <Photos>
        {photos.map((photo) => (
          <ReviewEntryPhotoEntry
            key={photo.id}
            photo={photo}
            setShowPhoto={setShowPhoto}
            setPhotoURL={setPhotoURL}
          />
        ))}
      </Photos>
    );
  }
}

ReviewEntryPhoto.propTypes = {
  photos: PropTypes.arrayOf(
    PropTypes.objectOf(PropTypes.any),
  ),
  setShowPhoto: PropTypes.func,
  showPhoto: PropTypes.bool,
};

ReviewEntryPhoto.defaultProps = {
  photos: [],
  setShowPhoto: (e) => e,
  showPhoto: false,
};

export default ReviewEntryPhoto;
