import React from 'react';
import styled from 'styled-components';
import StyleSelector from './StyleSelector';
import AddToCartForm from './AddToCartForm';

const InfoContainer = styled.div`
  border: 10px;
  padding: 15px;
  width: 35%;
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

      {/* <div>Stars go here. Remember to add</div> */}

      <div>{overview.category.toUpperCase()}</div>

      <h2>{overview.name}</h2>

      <div>{overview.default_price}</div>

      <div>
        <b>STYLE > </b>
        {selectedStyle.name.toUpperCase()}
      </div>

      <StyleSelector
        styles={styles}
        selectedStyle={selectedStyle}
        setSelectedStyle={setSelectedStyle}
        setIndex={setIndex} />

      <AddToCartForm
        selectedStyle={selectedStyle}
        price={overview.default_price}
        setAd={setAd} />

    </InfoContainer>
  );
}
