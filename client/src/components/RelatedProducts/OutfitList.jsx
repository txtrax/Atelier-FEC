/* eslint-disable react/jsx-no-bind */
import React, { useState, useContext, useEffect } from 'react';
import styled from 'styled-components';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';
import axios from 'axios';
import OutfitCard from './OutfitCard';
import IdContext from '../Context';

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

const AddOutfit = styled.button`
  width: 266px;
  height: 394.75px;
  font-size: 30px;
  color: #1d3557;
  background: #f1faee;
  border: 3px solid #1d3557;
  display: inline-block;
  vertical-align: top;
  margin-left: 5px;
  margin-right: 5px;
  cursor: pointer;
  &:hover {
  background: #a8dadc;
  color: #f1faee;
  }
`;

function OutfitList() {
  const slideLeft = () => {
    const slider = document.getElementById('slider-outfit');
    slider.scrollLeft -= 300;
  };

  const slideRight = () => {
    const slider = document.getElementById('slider-outfit');
    slider.scrollLeft += 300;
  };

  const { productId } = useContext(IdContext);
  const [outfitInfo, setOutfitInfo] = useState([]);

  function getOutfitInfo(id) {
    return axios.get(`/products/${id}`);
  }

  function getOutfitStyle(id) {
    return axios.get(`/products/${id}/styles`);
  }

  const allOutfits = [];
  const allPromises = [];

  function saveToLocalStorage(currId) {
    if (localStorage.getItem('outfitIds') === null) {
      localStorage.setItem('outfitIds', JSON.stringify([currId]));
    } else {
      const allIds = JSON.parse(localStorage.getItem('outfitIds'));
      if (allIds.indexOf(currId) < 0) {
        allIds.push(currId);
        localStorage.setItem('outfitIds', JSON.stringify(allIds));
      }
    }
  }

  function saveToOutfitState(currId) {
    if (!allOutfits.some((element) => element === currId)) {
      const promise = Promise.all([getOutfitInfo(currId),
        getOutfitStyle(currId)]);
      allPromises.push(promise);

      Promise.all(allPromises)
        .then((result) => {
          result.forEach((element) => {
            const product = {};
            product.info = element[0].data;
            product.style = element[1].data;
            allOutfits.push(product);
          });
          console.log('allOutfits: ', allOutfits);
          setOutfitInfo([...allOutfits]);
        })
        .catch((err) => {
          console.error('Error when retrieving outfit data: ', err);
        });
    }
  }

  function deleteFromLocalStorage(currId) {
    const allIds = JSON.parse(localStorage.getItem('outfitIds'));
    for (let i = 0; i < allIds.length; i += 1) {
      if (allIds[i] === currId) {
        allIds.splice(i, 1);
        localStorage.setItem('outfitIds', JSON.stringify(allIds));
      }
    }
  }

  function deleteFromOutfitState(currId) {
    const i = allOutfits.findIndex((element) => element.info.id === currId);
    allOutfits.splice(i, 1);
    setOutfitInfo([...allOutfits]);
  }

  function addCard() {
    saveToLocalStorage(productId);
    saveToOutfitState(productId);
  }

  function deleteCard(currId) {
    deleteFromLocalStorage(currId);
    deleteFromOutfitState(currId);
  }

  useEffect(() => {
    if (localStorage.getItem('outfitIds') !== null) {
      JSON.parse(localStorage.getItem('outfitIds')).forEach((id) => {
        saveToOutfitState(id);
      });
    }
  }, []);

  console.log('outfitInfo: ', outfitInfo);

  return (
    <ListContainer>
      <SliderIconLeft onClick={slideLeft} />
      <CardContainer id="slider-outfit">
        {
          outfitInfo.map(
            (card) => (
              <OutfitCard
                key={card.info.id}
                card={card}
                deleteCard={deleteCard}
              />
            ),
          )
        }
        <AddOutfit type="button" onClick={() => addCard()}>+</AddOutfit>
      </CardContainer>
      <SliderIconRight onClick={slideRight} />
    </ListContainer>
  );
}

export default OutfitList;
