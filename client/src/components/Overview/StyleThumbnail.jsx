import React from 'react';
import styled from 'styled-components';
import { MdCheck } from 'react-icons/md';

const ThumbnailContainer = styled.div`
  position: relative;
  display: flex;
  height: 4.65em;
  width: 4.65em;
`;

const ThumbnailImage = styled.img`
  display: block;
  border: solid 1px #5D5F71;
  background-color: #FAFAFA;
  object-fit: cover;
  height: 4.65em;
  width: 4.65em;
  border-radius: 50%;
`;

const CheckIcon = styled(MdCheck)`
  position: absolute;
  padding: 2px;
  object-fit: cover;
  color: #5D5F71;
  border: solid 1px #5D5F71;
  background-color: #FAFAFA;
  top: 0;
  right: 0;
  width: 1em;
  height: 1em;
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
        <CheckIcon />
        <ThumbnailImage src={style.photos[0].thumbnail_url} />
      </ThumbnailContainer>
    );
  }
  return (
    <ThumbnailContainer>
      <ThumbnailImage src={style.photos[0].thumbnail_url} onClick={() => onSelect()} />
    </ThumbnailContainer>
  );
}
