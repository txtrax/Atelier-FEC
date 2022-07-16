import React from 'react';
import styled from 'styled-components';
import StyleSelector from './StyleSelector';

const InfoContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

export default function ProductInfo(props) {
  const { overview , styles } = props;

  return (
    <InfoContainer>

      <div>Stars go here</div>

      <div>{overview.category.toUpperCase()}</div>

      <h2>{overview.name}</h2>

      <div>{overview.default_price}</div>

      <div><b>STYLE > </b>{styles[0].name.toUpperCase()}</div>

      <StyleSelector styles={styles} />

      <div>Size and Quantity</div>

      <button>Add to Cart</button>

    </InfoContainer>
  );
}
