import React, { useState, useMemo } from 'react';
import styled from 'styled-components';
import ProductList from './ProductList';
import OutfitList from './OutfitList';
import ComparisonModal from './ComparisonModal';
import ModalContext from '../ModalContext';

const RelatedHeader = styled.h3`
  text-transform: uppercase;
  padding: 10px 0 10px 10px;
  color: #5D5F71;
`;

const MainContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
`;

function RelatedProducts() {
  const [isOpen, setIsOpen] = useState(false);
  const [relatedId, setRelatedId] = useState(0);

  const providerModalValue = useMemo(() => ({
    isOpen, setIsOpen, relatedId, setRelatedId,
  }), [isOpen, setIsOpen, relatedId, setRelatedId]);

  return (
    <MainContainer>
      <ModalContext.Provider value={providerModalValue}>
        <RelatedHeader>Related Products</RelatedHeader>
        <ProductList />
        {isOpen ? <ComparisonModal /> : ''}
        <RelatedHeader>Your Outfit</RelatedHeader>
        <OutfitList />
      </ModalContext.Provider>
    </MainContainer>
  );
}

export default RelatedProducts;
