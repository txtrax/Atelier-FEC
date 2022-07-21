import React, { useState } from 'react';
import styled from 'styled-components';
import {
  MdChevronLeft, MdChevronRight, MdFullscreen,
} from 'react-icons/md';
import Image from './Image';
import ZoomModal from './ZoomModal';

const GalleryContainer = styled.div`
  border: 10px;
  padding: 15px;
  width: 70%;
  height: 500px;
  background-color: rgb(248,248,248);
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const FullscreenIcon = styled(MdFullscreen)`
  position: absolute;
  padding: 2px;
  object-fit: cover;
  top: 10px;
  right: 10px;
  width: 27px;
  height: 27px;
  opacity: 0.5;
  &:hover {
    opacity: 1;
  }
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

  const [zoomIn, setZoomIn] = useState(false);

  const display = photos[currentIndex];

  return (
    <GalleryContainer>

      <FullscreenIcon onClick={() => setZoomIn(true)} />

      {currentIndex > 0 && <SliderIconLeft onClick={() => setIndex(currentIndex - 1)} />}

      <Image
        image={display}
        key={display.thumbnail_url}
      />

      {currentIndex < photos.length - 1 && <SliderIconRight onClick={() => setIndex(currentIndex + 1)} />}

      {zoomIn && (
        <ZoomModal
          setZoomIn={setZoomIn}
          image={display}
          key={display.url}
          currentIndex={currentIndex}
          setIndex={setIndex}
          photos={photos}
        />
      )}

    </GalleryContainer>
  );
}
