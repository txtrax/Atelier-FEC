
import React, { useContext, useState, useEffect } from 'react';
import styled from 'styled-components';
import { MdExpandLess, MdExpandMore } from 'react-icons/md';
import Image from './Image';

const ThumbnailContainer = styled.div`
  width: 100px;
  height: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
`;
// const GalleryContainer = styled.div`
//   width: 100%;
//   height: 100%;
//   object-fit: contain
// `;

const SliderIconUp = styled(MdExpandLess)`
  height: 2em;
  width: 2em;
  position: absolute;
  left: 0;
  background: #a8dadc;
  border-radius: 50%;
  opacity: 0.5;
  &:hover {
    opacity: 1;
  }
 `;

const SliderIconDown = styled(MdExpandMore)`
  height: 2em;
  width: 2em;
  position: absolute;
  right: 0;
  background: #a8dadc;
  border-radius: 50%;
  opacity: 0.5;
  &:hover {
    opacity: 1;
  }
`;

function MainCarousel(props) {
  const { photos } = props;
  console.log(photos);

  let arrayOfURL = photos.map((image) => <Image image={image} key={image.thumbnail_url} />);

  const slideUp = () => {
    const newIndex = index - 1;
    setIndex(newIndex);
  };

  const slideDown = () => {
    const newIndex = index + 1;
    setIndex(newIndex);
  };

  return (
    <ThumbnailContainer>
      <SliderIconUp onClick={slideUp} />
      {arrayOfURL}
      <SliderIconDown onClick={slideDown} />
    </ThumbnailContainer>
  );
}

export default MainCarousel;