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

  function saveToLocalStorage(currId) {
    const localStorageItem = localStorage.getItem('outfits');
    if (localStorageItem === null) {
      localStorage.setItem('outfits', JSON.stringify([currId]));
    } else {
      const allProductId = JSON.parse(localStorageItem);
      if (allProductId.indexOf(currId) < 0) {
        allProductId.push(currId);
        localStorage.setItem('outfits', JSON.stringify(allProductId));
      }
    }
  }

  const allOutfits = [];
  const allPromises = [];

  function getOutfits(currId) {
    let currIdx = -1;
    const localStorageItem = JSON.parse(localStorage.getItem('outfits'));
    const index = localStorageItem.indexOf(currId);
    allOutfits.forEach((element) => {
      if (element.info.id === currId) {
        currIdx = index;
      }
    });
    if (currIdx < 0) {
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
          // console.log('allOutfits: ', allOutfits);
          setOutfitInfo([...allOutfits]);
        })
        .catch((err) => {
          console.error('Error when retrieving outfit data: ', err);
        });
    }
  }

  function addCard() {
    if (typeof (Storage) !== 'undefined') {
      saveToLocalStorage(productId);
      getOutfits(productId);
    } else {
      console.err('Sorry! No Web Storage support..');
    }
  }

  function deleteCard(currId) {
    const localStorageItem = JSON.parse(localStorage.getItem('outfits'));
    if (localStorageItem.length > 0) {
      const currIdx = localStorageItem
        .findIndex((id) => id === currId);
      if (currIdx === 0 && localStorageItem.length === 1) {
        localStorage.removeItem('outfits');
        setOutfitInfo([]);
      } else {
        localStorageItem.splice(currIdx, 1);
        localStorage.setItem('outfits', JSON.stringify(localStorageItem));
        const index = allOutfits.findIndex((p) => p.product.id === currId);
        allOutfits.splice(index, 1);
        setOutfitInfo([...allOutfits]);
        console.log('allOutfits: ', allOutfits);
      }
    }
  }

  function getSavedOutfits() {
    const localStorageItem = localStorage.getItem('outfits');
    if (localStorageItem !== null) {
      const productIds = JSON.parse(localStorageItem);
      productIds.forEach((id) => {
        getOutfits(id);
      });
    }
  }

  useEffect(() => {
    getSavedOutfits();
  }, []);

  // console.log('outfitInfo: ', outfitInfo);

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
