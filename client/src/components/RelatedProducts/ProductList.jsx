import React, { useContext, useState, useEffect } from 'react';
import styled from 'styled-components';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';
import axios from 'axios';
import ProductCard from './ProductCard';
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
  color: #5D5F71;
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
  right: 0;
  background: rgb(248,248,248);
  border-radius: 50%;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  opacity: 0.5;
  &:hover {
    opacity: 1;
  }
`;

function ProductList() {
  const slideLeft = () => {
    const slider = document.getElementById('slider-related');
    slider.scrollLeft -= 300;
  };

  const slideRight = () => {
    const slider = document.getElementById('slider-related');
    slider.scrollLeft += 300;
  };

  const { productId } = useContext(IdContext);
  const [relatedInfo, setRelatedInfo] = useState([]);

  function getRelatedInfo(id) {
    return axios.get(`/products/${id}`);
  }

  function getRelatedStyle(id) {
    return axios.get(`/products/${id}/styles`);
  }

  function getRatings(id) {
    return axios.get(`/reviews/?product_id=${id}&sort=relevant`);
  }

  const allPromises = [];
  const allProducts = [];

  useEffect(() => {
    axios.get(`/products/${productId}/related`)
      .then((res) => {
        const allRelatedIds = res.data;
        allRelatedIds.forEach((id) => {
          const promise = Promise.all([getRelatedInfo(id), getRelatedStyle(id), getRatings(id)]);
          allPromises.push(promise);
        });

        Promise.all(allPromises)
          .then((result) => {
            result.forEach((element) => {
              const product = {};
              product.info = element[0].data;
              product.style = element[1].data;
              product.ratings = element[2].data;
              allProducts.push(product);
            });
            setRelatedInfo(allProducts);
          })
          .catch((err) => {
            console.error('Error when retrieving related data: ', err);
          });
      });
  }, [productId]);

  return (
    <ListContainer>
      <SliderIconLeft onClick={slideLeft} />
      <CardContainer id="slider-related">
        {
          relatedInfo.map((card) => <ProductCard card={card} key={card.info.id} />)
        }
      </CardContainer>
      <SliderIconRight onClick={slideRight} />
    </ListContainer>
  );
}

export default ProductList;
