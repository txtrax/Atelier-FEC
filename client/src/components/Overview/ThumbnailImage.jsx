import React from 'react';
import styled from 'styled-components';
import { PropTypes } from 'prop-types';

const MiniImage = styled.img`
  object-fit: contain;
  height: 62px;
  width: 62px;
  justify-content: space-between
`;

const CurrentImage = styled.img`
  margin: 1px;
  border: solid 2px;
  border-color: black;
  object-fit: contain;
  height: 62px;
  width: 62px;
  justify-content: space-between
`;

function ThumbnailImage(props) {
  const { index, image, currentIndex } = props;

  return (
    <div>
      { currentIndex === index ? (<CurrentImage src={image.thumbnail_url} />) : (<MiniImage style={{ opacity: 0.5 }} src={image.thumbnail_url} />)}
    </div>
  );
}

ThumbnailImage.propTypes = {
  image: PropTypes.shape({
    thumbnail_url: PropTypes.string,
    url: PropTypes.string,
  }),
};

ThumbnailImage.defaultProps = {
  image: {},
};

export default ThumbnailImage;
