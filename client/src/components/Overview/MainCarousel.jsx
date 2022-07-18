import React from 'react';
import styled from 'styled-components';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';
import Image from './Image';

const GalleryContainer = styled.div`
  border: 10px;
  padding: 15px;
  width: 50%;
  background-color: rgb(248,248,248);
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SliderIconLeft = styled(MdChevronLeft)`
  height: 2em;
  width: 2em;
  position: absolute;
  left: 10px;
  background: rgb(248,248,248);
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
  right: 10px;
  background: rgb(248,248,248);
  border-radius: 50%;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  opacity: 0.5;
  &:hover {
    opacity: 1;
  }
`;

export default function MainCarousel(props) {
  const { currentIndex, setIndex, photos } = props;

  let display = photos[currentIndex];

  return (
    <GalleryContainer>

      {currentIndex > 0 && <SliderIconLeft onClick={() => setIndex(currentIndex - 1)} />}

      <Image image={display} key={display.thumbnail_url} />

      {currentIndex < photos.length - 1 && <SliderIconRight onClick={() => setIndex(currentIndex + 1)} />}

    </GalleryContainer>
  );
}
