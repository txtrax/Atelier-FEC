import React from 'react';
import styled from 'styled-components';
import { PropTypes } from 'prop-types';

const MiniImage = styled.img`
  margin: 1px;
  border: solid 3px;
  border-color: #FAFAFA;
  object-fit: contain;
  height: 4.65em;
  width: 4.65em;
  opacity: 0.5;
  justify-content: space-between
`;

const CurrentImage = styled.img`
  margin: 1px;
  border: solid 3px;
  border-color: #5D5F71;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.1), 0 4px 8px 0 rgba(0, 0, 0, 0.1);
  height: 4.65em;
  width: 4.65em;
  border-radius: 5px;
  object-fit: contain;
  justify-content: space-between
`;

function ThumbnailImage(props) {
  const { index, image, currentIndex, setIndex } = props;

  let display;

  if (image.thumbnail_url === null) {
    display = null;
  } else if (currentIndex === index) {
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
