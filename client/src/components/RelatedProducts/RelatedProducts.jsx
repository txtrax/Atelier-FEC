import React from 'react';
import styled from 'styled-components';
import ProductList from './ProductList';
import OutfitList from './OutfitList';

const RelatedHeader = styled.h3`
  text-transform: uppercase;
  padding-left: 10px;
  padding-bottom: 10px;
`;

const MainContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
`;

function RelatedProducts() {
  return (
    <MainContainer data-testid="related-main">
      <RelatedHeader>Related Products</RelatedHeader>
      <ProductList />
      <RelatedHeader>Your Outfit</RelatedHeader>
      <OutfitList />
    </MainContainer>
  );
}

// color: https://coolors.co/palette/e63946-f1faee-a8dadc-457b9d-1d3557

export default RelatedProducts;
