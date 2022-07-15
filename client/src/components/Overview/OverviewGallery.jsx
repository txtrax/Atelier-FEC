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

// this contains: thumbnails, main carousel, and product info

function OverviewGallery(props) {
  const { overview } = props;
  const { productId } = useContext(IdContext);
  const [styles, setStyles] = useState([]);
  const [selectedStyle, setSelectedStyle] = useState({});
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    //make a set styles function
    axios.get(`/products/${productId}/styles`)
      .then((results) => {
        results.data.results.forEach((style, index) => {
          // if first index
          if (index === 0) {
            // set as default for selected Style
            setSelectedStyle(style);
          }
          // add to styles array
          setStyles([...styles, style]);
        });
      })
      .then(() => setLoaded(true))
      .catch((err) => {
        console.log('error getting styles', err);
      });
  }, []);

  if (!loaded) {
    return <div>Hello</div>;
  }
  return (
    <ProductContainer>
      <ThumbnailCarousel
        loaded={loaded}
        photos={selectedStyle.photos}
      />
      <MainCarousel
        loaded={loaded}
        photos={selectedStyle.photos}
      />
      <ProductInfo
        loaded={loaded}
        overview={overview}
        styles={styles}
      />
    </ProductContainer>
  );
}

export default OverviewGallery;
