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
  const { overview } = props;
  const { productId } = useContext(IdContext);
  const [styles, setStyles] = useState([]);
  const [selectedStyle, setSelectedStyle] = useState(null);

  useEffect(() => {
    axios.get(`/products/${productId}/styles`)
      .then((results) => {
        results.data.results.forEach((style, index) => {
          if (index === 0) {
            setSelectedStyle(style);
          }
          setStyles([...styles, style]);
        });
      })
      .catch((err) => {
        console.log('error getting styles', err);
      });
  }, []);

  if (styles.length === 0 || selectedStyle === null) {
    return <div>Hello from Overview Gallery</div>;
  }

  return (
    <ProductContainer>

      <ThumbnailCarousel
        photos={selectedStyle.photos}
      />

      <MainCarousel
        photos={selectedStyle.photos}
      />

      <ProductInfo
        overview={overview}
        styles={styles}
      />

    </ProductContainer>
  );
}
