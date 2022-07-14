import React from 'react';
import styled from 'styled-components';
import Style from './Style';

const InfoContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
`;

export default function ProductInfo(props) {
  const { overview } = props;

  return (
    <InfoContainer>
      <div>Stars go here</div>
      <div>{overview.category.toUpperCase()}</div>
      <h2>{overview.name}</h2>
      <div>{overview.default_price}</div>
      <div><b>STYLE > </b>SELECTED STYLE</div>
      <Style />
      <div>Size and Quantity</div>
      <button>Add to Cart</button>
    </InfoContainer>
  );
}
