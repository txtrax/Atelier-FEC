import React from 'react';
// import React, { useContext, useState, useEffect } from 'react';
// import axios from 'axios';
import styled from 'styled-components';
// import IdContext from '../Context';
import OverviewDisplay from './OverviewDisplay';
// import OverviewDescription from './OverviewDescription';

const MainContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
`;

const OverviewHeader = styled.h3`
  text-transform: uppercase;
  padding-left: 10px;
  padding-bottom: 10px;
`;

function Overview() {
  // const { productId } = useContext(IdContext);

  // const [overview, setOverview] = useState({});

  // useEffect(() => {
  //   axios.get(`/products/${productId}`)
  //     .then((results) => {
  //       setOverview(results.data);
  //     })
  //     .catch((err) => {
  //       console.log('error retrieving overview', err);
  //     });
  // }, []);

  return (
    <MainContainer>
      <OverviewHeader>Ad</OverviewHeader>
      
      <OverviewHeader>Image Gallery</OverviewHeader>

      <OverviewDisplay />

      <OverviewHeader>Product Description</OverviewHeader>

      {/* <OverviewDescription overview={overview} /> */}

    </MainContainer>
  );
}

export default Overview;
