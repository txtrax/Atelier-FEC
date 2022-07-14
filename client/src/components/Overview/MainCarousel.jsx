import React, { useContext, useState, useEffect } from 'react';
import styled from 'styled-components';
// import { MdChevronLeft, MdChevronRight } from 'react-icons/md';
import Image from './Image';

const GalleryContainer = styled.div`
  width: 60%;
  height: 60%;
  position: relative;
  display: flex;
  align-items: center;
`;
// const GalleryContainer = styled.div`
//   width: 100%;
//   height: 100%;
//   object-fit: contain
// `;

function MainCarousel(props) {
  // add slideLeft
  // add slideLeft
  const { loaded, photos } = props;
  let display = null;
  if (loaded) {
    display = photos.map((image) => <Image image={image} key={image.thumbnail_url} />);
  }

  return (
    <GalleryContainer>
      {display}
    </GalleryContainer>
  );
}

export default MainCarousel;