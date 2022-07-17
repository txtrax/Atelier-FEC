import React, { useState } from 'react';
import styled from 'styled-components';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';
import Image from './Image';

const GalleryContainer = styled.div`
  width: 50%;
  height: 500px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SliderIconLeft = styled(MdChevronLeft)`
  height: 2em;
  width: 2em;
  position: absolute;
  left: 0;
  background: white;
  border-radius: 50%;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
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
  background: white;
  border-radius: 50%;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  opacity: 0.5;
  &:hover {
    opacity: 1;
  }
`;

export default function MainCarousel(props) {
  const { photos } = props;

  let [index, setIndex] = useState(0);

  let display = photos[index];

  return (
    <GalleryContainer>

      {index > 0 && <SliderIconLeft onClick={() => setIndex(index - 1)} />}

      <Image image={display} key={display.thumbnail_url} />

      {index < photos.length - 1 && <SliderIconRight onClick={() => setIndex(index + 1)} />}

    </GalleryContainer>
  );
}
