import React from 'react';
import styled from 'styled-components';

const ThumbnailContainer = styled.div`
  postion: relative;
`;

const ThumbnailImage = styled.img`
  display: block;
  border: solid 1px;
  border-color: black;
  object-fit: cover;
  height: 60px;
  width: 60px;
  border-radius: 50%;
`;

const FontAwesomeIcon = styled.i`
  position: absolute;
  padding: 2px;
  object-fit: cover;
  border: solid 1px;
  border-color: black;
  top: 0;
  right: 0;
  width: 15px;
  height: 15px;
  background-color: white;
  border-radius: 50%;
`;

export default function StyleThumbnail(props) {
  const {
    style, selectedStyle, setSelectedStyle, setIndex,
  } = props;

  const onSelect = () => {
    setSelectedStyle(style);
    setIndex(0);
  };

  if (selectedStyle.style_id === style.style_id) {
    return (
      <ThumbnailContainer>
        <FontAwesomeIcon icon="fa-solid fa-check" />
        <ThumbnailImage src={style.photos[0].thumbnail_url} />
      </ThumbnailContainer>
    );
  }
  return (
    <ThumbnailImage src={style.photos[0].thumbnail_url} onClick={() => onSelect()} />
  );
}
