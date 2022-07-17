import React from 'react';
import styled from 'styled-components';

const ThumbnailImage = styled.img`
  object-fit: cover;
  height: 62px;
  width: 62px;
  border-radius: 50%;
  :hover {
    border: solid 1px;
    border-color: black;
  }
`;

export default function StyleThumbnail(props) {
  const { style } = props;

  return (
    <ThumbnailImage src={style.photos[0].thumbnail_url} />
  );
}
