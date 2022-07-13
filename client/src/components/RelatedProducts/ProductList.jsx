import React from 'react';
import styled from 'styled-components';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';
import ProductCard from './ProductCard';

const ListContainer = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  align-items: center;
`;

const CardContainer = styled.div`
  width: 100%;
  height: 100%;
  color: #f1faee;
  white-space: nowrap;
  overflow-x: scroll;
  scrollbar-width: none;
  align-items: center;
  scroll-behavior: smooth;
  &::-webkit-scrollbar {
    display: none;
  }
`;

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

function ProductList() {
  const slideLeft = () => {
    const slider = document.getElementById('slider');
    slider.scrollLeft += 300;
  };

  const slideRight = () => {
    const slider = document.getElementById('slider');
    slider.scrollLeft -= 300;
  };

  const slides = [1, 2, 3, 4, 5, 6, 7, 8];

  return (
    <ListContainer>
      <SliderIconLeft onClick={slideLeft} />
      <CardContainer id="slider">
        {
          slides.map(() => <ProductCard />)
        }
      </CardContainer>
      <SliderIconRight onClick={slideRight} />
    </ListContainer>
  );
}

export default ProductList;
