import React, { useContext } from 'react';
import styled from 'styled-components';
import { FaFacebookF, FaTwitter, FaPinterestP } from 'react-icons/fa';
import IdContext from '../Context';
import StyleSelector from './StyleSelector';
import AddToCartForm from './AddToCartForm';
import StarRating from '../RelatedProducts/StarRating';

const InfoContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 15px;
  width: 35%;
  justify-content: space-between;
  color: #5D5F71;
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
  const { productId } = useContext(IdContext);

  const renderPrice = () => {
    if (selectedStyle.sale_price) {
      return (
        <div>
          <span style={{ color: "#DABECA" }}>
            <b>{`$${selectedStyle.sale_price}\u00A0\u00A0\u00A0\u00A0`}</b>
          </span>
          <span style={{ textDecoration: "line-through" }}>
            {`$${selectedStyle.original_price}`}
          </span>
        </div>
      )
    }
    return (
      <div>
        <span><b>${selectedStyle.original_price}</b></span>
      </div>
    )
  }

  return (
    <InfoContainer>

      <div><StarRating id={productId}/></div>

      <div>{overview.category.toUpperCase()}</div>

      <h2>{overview.name}</h2>

      <div>{renderPrice()}</div>

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
        price={selectedStyle.sale_price ? selectedStyle.sale_price : selectedStyle.original_price}
        name={overview.name} />

      <ShareContainer>
        <IconButton style={{backgroundColor: '#4267B2'}}><FacebookIcon /></IconButton>
        <IconButton style={{backgroundColor: '#1DA1F2'}}><TwitterIcon /></IconButton>
        <IconButton style={{backgroundColor: '#E60023'}}><PinterestIcon /></IconButton>
      </ShareContainer>

    </InfoContainer>
  );
}
