import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import PhotoModal from './PhotoModal';

const Thumbnail = styled.div`
  width: 20%;
`;
const Image = styled.img`
  width: 100%;
  height: 90px;
  object-fit: cover;
`;

function ReviewEntryPhotoEntry({
  photo, setShowPhoto, setPhotoURL,
}) {
  return (
    <Thumbnail>
      <Image
        src={photo.url}
        alt="review"
        onClick={(e) => {
          console.log('In Photo Entry, photoURL = ', e.target.src);
          setPhotoURL(e.target.src);
          setShowPhoto(true);
        }}
      />
    </Thumbnail>

  );
}

ReviewEntryPhotoEntry.propTypes = {
  photo: PropTypes.objectOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number])),
  setShowPhoto: PropTypes.func,
  setPhotoURL: PropTypes.func,
};

ReviewEntryPhotoEntry.defaultProps = {
  photo: {},
  setShowPhoto: (e) => e,
  setPhotoURL: (e) => e,
};

export default ReviewEntryPhotoEntry;
