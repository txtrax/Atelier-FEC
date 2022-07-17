import React from 'react';
import { PropTypes } from 'prop-types';

function Image(props) {
  const { image } = props;

  return (
    <img alt="mainImage" src={image.thumbnail_url} />
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
