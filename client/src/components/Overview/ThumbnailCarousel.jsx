import React from 'react';
import styled from 'styled-components';
import { MdExpandLess, MdExpandMore } from 'react-icons/md';
import ThumbnailImage from './ThumbnailImage';

const ThumbnailContainer = styled.div`
  width: 10%;
  height: 470px;
  padding: 30px 0px 30px 10px;
  position: relative;
  background-color: #FAFAFA;
  display: flex;
  flex-direction: column;
  white-space: nowrap;
  overflow-x: scroll;
  scrollbar-width: none;
  align-items: center;
  scroll-behavior: smooth;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const SliderIconUp = styled(MdExpandLess)`
height: 2em;
width: 2em;
position: absolute;
top: 5px;
color: #5D5F71;
background: white;
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
bottom: 5px;
color: #5D5F71;
background: white;
border-radius: 50%;
opacity: 0.5;
&:hover {
  opacity: 1;
}
`;

export default function ThumbnailCarousel(props) {
  const { currentIndex, setIndex, photos } = props;

  return (
    <ThumbnailContainer>

      {/* {currentIndex > 0 && <SliderIconUp onClick={() => setIndex(currentIndex - 1)} />} */}

      {photos.map((image, index) => {
        return <ThumbnailImage
          image={image}
          index={index}
          key={image.thumbnail_url}
          currentIndex={currentIndex}
          setIndex={setIndex} />;
      })}

      {/* {currentIndex + 7 < photos.length - 1 && <SliderIconDown onClick={() => setIndex(currentIndex + 1)} />} */}

    </ThumbnailContainer>
  );
}
