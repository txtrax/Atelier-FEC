import React from 'react';
import styled from 'styled-components';
import ProductFeature from './ProductFeature';

const DescriptionContainer = styled.div`
  border: 2px;
  border-left-color: black;
  position: relative;
  display: flex;
  flex-direction: column;
`;

export default function ProductFeatureList(props) {
  const { features } = props;

  return (
    <DescriptionContainer>
      {features.map((feature) => <ProductFeature feature={feature} key={feature.feature} />)}
    </DescriptionContainer>
  );
}
