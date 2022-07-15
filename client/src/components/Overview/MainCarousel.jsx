import React, { useState } from 'react';
import styled from 'styled-components';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';
import Image from './Image';

const GalleryContainer = styled.div`
  width: 60%;
  height: 60%;
  position: relative;
  display: flex;
  justify-content: center;
`;
// const GalleryContainer = styled.div`
//   width: 100%;
//   height: 100%;
//   object-fit: contain
// `;

const SliderIconLeft = styled(MdChevronLeft)`
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

const SliderIconRight = styled(MdChevronRight)`
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

// refactor this mess
export default function MainCarousel(props) {
  const { loaded, photos } = props;

  let arrayOfURL = photos.map((image) => <Image image={image} key={image.thumbnail_url} />);

  let [index, setIndex] = useState(0);

  let display = arrayOfURL[index];

  const slideLeft = () => {
    const newIndex = index - 1;
    setIndex(newIndex);
  };

  const slideRight = () => {
    const newIndex = index + 1;
    setIndex(newIndex);
  };

  return (
    <GalleryContainer>

      <SliderIconLeft onClick={slideLeft} />

      {display}

      <SliderIconRight onClick={slideRight} />

    </GalleryContainer>
  );
}
