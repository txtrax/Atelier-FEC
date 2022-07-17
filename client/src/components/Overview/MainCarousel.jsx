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
  const { photos } = props;

  let [index, setIndex] = useState(0);

  let display = photos[index];
  console.log(display)
  return (
    <GalleryContainer>

      {index > 0 && <SliderIconLeft onClick={() => setIndex(index - 1)} />}

      <Image image={display} key={display.thumbnail_url} />

      {index < photos.length - 1 && <SliderIconRight onClick={() => setIndex(index + 1)} />}

    </GalleryContainer>
  );
}
