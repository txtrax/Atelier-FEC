import React, { useContext, useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import IdContext from '../Context';
import MainCarousel from './MainCarousel';
import ProductInfo from './ProductInfo';

const DescriptionContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
`;

const ProductContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
`;

const OverviewHeader = styled.h3`
  text-transform: uppercase;
  padding-left: 10px;
  padding-bottom: 10px;
`;
// this contains: thumbnails, main carousel, and product info

function OverviewDisplay() {
  const { productId } = useContext(IdContext);

  const [overview, setOverview] = useState({});
  const [styles, setStyles] = useState([]);
  const [selectedStyle, setSelectedStyle] = useState({});
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    axios.get(`/products/${productId}/styles`)
      .then((results) => {
        console.log('got styles');
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
      .catch((err) => {
        console.log('error getting styles', err);
      });
    axios.get(`/products/${productId}`)
      .then((results) => {
        console.log('got overview')
        setOverview(results.data);
      })
      .then(() => setLoaded(true))
      .catch((err) => {
        console.log('error retrieving overview', err);
      });
  }, []);

  if (!loaded) {
    return <div>Hello</div>;
  }
  return (
    <ProductContainer>
      <OverviewHeader>Thumbnails</OverviewHeader>

      {/* <OverviewHeader>Carousel</OverviewHeader> */}
      <MainCarousel
        loaded={loaded}
        photos={selectedStyle.photos}
      />
      {/* <OverviewHeader>Product Info</OverviewHeader> */}
      <ProductInfo
        loaded={loaded}
        overview={overview}
        styles={styles}
      />
    </ProductContainer>
    // <DescriptionContainer>

    // </DescriptionContainer>
  );
}

export default OverviewDisplay;
