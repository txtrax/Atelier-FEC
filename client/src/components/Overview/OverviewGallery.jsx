import React, { useContext, useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import IdContext from '../Context';
import MainCarousel from './MainCarousel';
import ProductInfo from './ProductInfo';
import ThumbnailCarousel from './ThumbnailCarousel';

const ProductContainer = styled.div`
  display: flex;
  flex-direction: row;
  border-radius: 15px;
  height: 500px;
`;

export default function OverviewGallery(props) {
  const { overview } = props;

  const { productId } = useContext(IdContext);
  const [styles, setStyles] = useState([]);
  const [selectedStyle, setSelectedStyle] = useState(null);
  const [currentIndex, setIndex] = useState(0);

  useEffect(() => {
    axios.get(`/products/${productId}/styles`)
      .then((results) => {
        setStyles(results.data.results);
        setSelectedStyle(results.data.results[0]);
      })
      .catch((err) => {
        console.log('error getting styles', err);
      });
  }, [productId]);
  console.log(selectedStyle)
  return (
    <ProductContainer>

      {selectedStyle && (<ThumbnailCarousel
        currentIndex={currentIndex}
        setIndex={setIndex}
        photos={selectedStyle.photos}
      />)}

      {selectedStyle && (<MainCarousel
        currentIndex={currentIndex}
        setIndex={setIndex}
        photos={selectedStyle.photos}
      />)}

      {styles.length !== 0 && (<ProductInfo
        overview={overview}
        styles={styles}
        selectedStyle={selectedStyle}
        setSelectedStyle={setSelectedStyle}
        setIndex={setIndex}
      />)}

    </ProductContainer>
  );
}
