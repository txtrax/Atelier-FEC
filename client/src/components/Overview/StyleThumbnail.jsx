import React from 'react';
import styled from 'styled-components';

export default function StyleThumbnail(props) {
  const { style } = props;

  return (
    <img height="60" width="60" src={style.photos[0].thumbnail_url} />
  );
}
