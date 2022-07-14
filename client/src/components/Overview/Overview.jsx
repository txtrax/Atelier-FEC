import React from 'react';
import styled from 'styled-components';
import OverviewDisplay from './OverviewDisplay';

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

function Overview(props) {
  const { productId } = props;
  return (
    <MainContainer>

      <OverviewHeader>Image Gallery</OverviewHeader>

      <OverviewDisplay productId={productId} />

      <OverviewHeader>Product Description</OverviewHeader>

    </MainContainer>
  );
}

export default Overview;
