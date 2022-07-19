import React from 'react';
import styled from 'styled-components';

const FeaturesContainer = styled.li`
  padding: 1px;
`;

export default function ProductFeature(props) {
  const { feature } = props;

  return (
    <FeaturesContainer>
      {feature.feature}: {feature.value}
    </FeaturesContainer>
  );
}
