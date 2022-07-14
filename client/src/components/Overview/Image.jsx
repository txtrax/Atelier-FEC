import React from 'react';

const Image = (props) => {
  const {image} = props;

  return (
    <img src={image.thumbnail_url}></img>
  )
};

export default Image;