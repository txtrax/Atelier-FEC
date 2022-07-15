import React from 'react';
import styled from 'styled-components';
import ProductDescription from './ProductDescription';
import ProductFeatures from './ProductFeatures';

const DescriptionAndFeatures = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

export default function OverviewDescription(props) {
  const { overview } = props;
  return (
    <DescriptionAndFeatures>
      <ProductDescription
        description={overview.description}
      />
      <ProductFeatures
        features={overview.features}
      />
    </DescriptionAndFeatures>
  )
}
