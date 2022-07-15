import React from 'react';
import styled from 'styled-components';

const DescriptionContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
`;

export default function ProductDescription(props) {
  const { description } = props;
  return (
    <DescriptionContainer>
      {description}
    </DescriptionContainer>
  );
}
