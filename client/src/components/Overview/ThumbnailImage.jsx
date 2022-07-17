import React from 'react';
import styled from 'styled-components';
import { PropTypes } from 'prop-types';

const MiniImage = styled.img`
  object-fit: contain;
  height: 62px;
  width: 62px;
  justify-content: space-between
`;

function ThumbnailImage(props) {
  const { image } = props;

  return (
    <MiniImage src={image.thumbnail_url} />
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
