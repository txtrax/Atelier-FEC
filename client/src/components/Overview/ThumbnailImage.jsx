import React from 'react';
import styled from 'styled-components';
import { PropTypes } from 'prop-types';

const MiniImage = styled.img`
  object-fit: contain;
  height: 62px;
  width: 62px;
  opacity: 0.5;
  justify-content: space-between
`;

const CurrentImage = styled.img`
  margin: 1px;
  border: solid 1px;
  border-color: black;
  height: 62px;
  width: 62px;
  border-radius: 8px;
  object-fit: contain;
  justify-content: space-between
`;

function ThumbnailImage(props) {
  const { index, image, currentIndex, setIndex } = props;

  let display;
  if (currentIndex === index) {
    display = <CurrentImage src={image.thumbnail_url} />;
  } else {
    display = <MiniImage src={image.thumbnail_url} onClick={() => setIndex(index)} />;
  }

  return (
    <div>
      { display }
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
