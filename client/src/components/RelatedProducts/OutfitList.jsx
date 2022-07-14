import React from 'react';
import styled from 'styled-components';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';
import OutfitCard from './OutfitCard';

const ListContainer = styled.div`
  width: 100%;
  height: 380px;
  color: #f1faee;
  background: #1d3557;
  position: relative;
  display: flex;
  align-items: center;
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

function OutfitList() {
  return (
    <ListContainer>
      <SliderIconLeft />
      <OutfitCard />
      <SliderIconRight />
    </ListContainer>
  );
}

export default OutfitList;
