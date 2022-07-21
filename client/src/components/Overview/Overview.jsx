import React, { useContext, useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import IdContext from '../Context';
import OverviewGallery from './OverviewGallery';
import OverviewDescription from './OverviewDescription';

const MainContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
`;

const OverviewHeader = styled.h1`
  display: flex;
  font-style: italic;
  justify-content: center;
`;

// make a get overview function but this works
export default function Overview() {
  const { productId } = useContext(IdContext);

  const [overview, setOverview] = useState(null);

  useEffect(() => {
    axios.get(`/products/${productId}`)
      .then((results) => {
        setOverview(results.data);
      })
      .catch((err) => {
        console.log('error retrieving product', err);
      });
  }, [productId]);

  return (
    <MainContainer>

      <OverviewHeader>Atelier</OverviewHeader>

      {overview && <OverviewGallery overview={overview} />}

      {overview && <OverviewDescription overview={overview} />}

    </MainContainer>
  );
}
