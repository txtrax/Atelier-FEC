import React, { useState } from 'react';
import styled from 'styled-components';
import { MdExpandLess, MdExpandMore } from 'react-icons/md';
import ThumbnailImage from './ThumbnailImage';

const ThumbnailContainer = styled.div`
  width: 130px;
  padding: 40px 5px 40px 5px;
  position: relative;
  background-color: rgb(248,248,248);
  display: flex;
  flex-direction: column;
  align-items: center;

`;

const SliderIconUp = styled(MdExpandLess)`
height: 2em;
width: 2em;
position: absolute;
top: 0;
background: white;
border-radius: 50%;
box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
opacity: 0.5;
&:hover {
  opacity: 1;
}
`;

const SliderIconDown = styled(MdExpandMore)`
height: 2em;
width: 2em;
position: absolute;
bottom: 0;
background: white;
border-radius: 50%;
box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
opacity: 0.5;
&:hover {
  opacity: 1;
}
`;

export default function ThumbnailCarousel(props) {
  const { currentIndex, setIndex, photos } = props;

  const slideDown = () => {
    console.log('You clicked down');
  };

  return (
    <ThumbnailContainer>

      {currentIndex > 0 && <SliderIconUp />}

      {photos.map((image, index) => {
        return <ThumbnailImage
          image={image}
          index={index}
          key={image.thumbnail_url}
          currentIndex={currentIndex}
          setIndex={setIndex}
        />;
      })}

      {/* adjust this to show only 7 */}
      <SliderIconDown onClick={slideDown} />

    </ThumbnailContainer>
  );
}
