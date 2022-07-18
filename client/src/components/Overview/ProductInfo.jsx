import React from 'react';
import styled from 'styled-components';
import StyleSelector from './StyleSelector';
import AddToCartForm from './AddToCartForm';

const InfoContainer = styled.div`
  padding: 25px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export default function ProductInfo(props) {
  const {
    overview, styles, selectedStyle, setSelectedStyle, setIndex, setAd
  } = props;

  return (
    <InfoContainer>

      {/* <div>Stars go here</div> */}

      <div>{overview.category.toUpperCase()}</div>

      <h2>{overview.name}</h2>

      <div>{overview.default_price}</div>

      <div>
        <b>STYLE > </b>
        {styles[0].name.toUpperCase()}
      </div>

      <StyleSelector styles={styles} selectedStyle={selectedStyle} setSelectedStyle={setSelectedStyle} setIndex={setIndex} />

      <AddToCartForm
        selectedStyle={selectedStyle}
        price={overview.default_price}
        setAd={setAd} />

    </InfoContainer>
  );
}
