import React, { useContext, useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import IdContext from '../Context';
import MainCarousel from './MainCarousel';
import ProductInfo from './ProductInfo';
import ThumbnailCarousel from './ThumbnailCarousel';

const ProductContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
`;

export default function OverviewGallery(props) {
  const { overview , setAd } = props;
  const { productId } = useContext(IdContext);
  const [styles, setStyles] = useState([]);
  const [selectedStyle, setSelectedStyle] = useState(null);
  let [index, setIndex] = useState(0);

  useEffect(() => {
    axios.get(`/products/${productId}/styles`)
      .then((results) => {
        setStyles(results.data.results);
        setSelectedStyle(results.data.results[0]);
      })
      .catch((err) => {
        console.log('error getting styles', err);
      });
  }, []);

  if (styles.length === 0 || selectedStyle === null) {
    return <div>Hello from Overview Gallery ┬┴┬┴┤(･_├┬┴┬┴</div>;
  }

  return (
    <ProductContainer>

      <ThumbnailCarousel
        index={index}
        setIndex={setIndex}
        photos={selectedStyle.photos}
      />

      <MainCarousel
        index={index}
        setIndex={setIndex}
        photos={selectedStyle.photos}
      />

      <ProductInfo
        overview={overview}
        styles={styles}
        selectedStyle={selectedStyle}
        setAd={setAd}
      />

    </ProductContainer>
  );
}
