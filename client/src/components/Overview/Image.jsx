import React from 'react';
import styled from 'styled-components';
import { PropTypes } from 'prop-types';

const MainImage = styled.img`
  display: block;
  object-fit: cover;
  height: 645px;
  width: 625px;
  position: relative;
  border: 1px;
  border-radius: 5px;
`;

function Image(props) {
  const { image, setZoomIn } = props;

  if (image.url === null) {
    return (
      <div style={{ color: '#5D5F71', fontSize: '1.5em', left: '40%' }}>NOT AVAILABLE</div>
    );
  }

  return (
    <MainImage src={image.url} onClick={() => setZoomIn(true)} />
  );
}

Image.propTypes = {
  image: PropTypes.shape({
    thumbnail_url: PropTypes.string,
    url: PropTypes.string,
  }),
};

Image.defaultProps = {
  image: {},
};

export default Image;
