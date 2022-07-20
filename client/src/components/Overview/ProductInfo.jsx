import React from 'react';
import styled from 'styled-components';
import { FaFacebookF, FaTwitter, FaPinterestP } from 'react-icons/fa';
import StyleSelector from './StyleSelector';
import AddToCartForm from './AddToCartForm';

const InfoContainer = styled.div`
  border: 10px;
  padding: 0px 0px 0px 25px;
  width: 35%;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const ShareContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  padding: 0px 3px 0px 3px;
`;

const IconButton = styled.div`
  height: 40px;
  width: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 20px;
`;

const FacebookIcon = styled(FaFacebookF)`
  height: 15px;
  color: white;
`;

const TwitterIcon = styled(FaTwitter)`
  height: 15px;
  color: white;
`;

const PinterestIcon = styled(FaPinterestP)`
  height: 15px;
  color: white;
`;

export default function ProductInfo(props) {
  const {
    overview, styles, selectedStyle, setSelectedStyle, setIndex
  } = props;

  return (
    <InfoContainer>

      <div>Stars go here. Remember to add</div>

      <div>{overview.category.toUpperCase()}</div>

      <h2>{overview.name}</h2>

      <div>${overview.default_price}</div>

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
        name={overview.name} />

      <ShareContainer>
        <IconButton style={{backgroundColor: "#4267B2"}}><FacebookIcon /></IconButton>
        <IconButton style={{backgroundColor: "#1DA1F2"}}><TwitterIcon /></IconButton>
        <IconButton style={{backgroundColor: "#E60023"}}><PinterestIcon /></IconButton>
      </ShareContainer>

    </InfoContainer>
  );
}
