import React, { useContext } from 'react';
import styled from 'styled-components';
import { FaFacebookF, FaTwitter, FaPinterestP } from 'react-icons/fa';
import IdContext from '../Context';
import StyleSelector from './StyleSelector';
import AddToCartForm from './AddToCartForm';
import Stars from './Stars';

const InfoContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 5px 15px;
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

const StarContainer = styled.div`
  height: 1em;
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
  height: 1em;
  color: white;
`;

const TwitterIcon = styled(FaTwitter)`
  height: 1em;
  color: white;
`;

const PinterestIcon = styled(FaPinterestP)`
  height: 1em;
  color: white;
`;

export default function ProductInfo(props) {
  const {
    overview, styles, selectedStyle, setSelectedStyle, setIndex,
  } = props;
  const { productId } = useContext(IdContext);

  const renderPrice = () => {
    if (selectedStyle.sale_price) {
      return (
        <div>
          <span style={{ color: '#DABECA', fontSize: '3em' }}>
            {`$${selectedStyle.sale_price}\u00A0\u00A0\u00A0`}
          </span>
          <span style={{ textDecoration: 'line-through', fontSize: '1.5em' }}>
            {`$${selectedStyle.original_price}`}
          </span>
        </div>
      );
    }
    return (
      <div style={{ fontSize: '3em' }}>
        $
        {selectedStyle.original_price}
      </div>
    );
  };

  return (
    <InfoContainer>

      <StarContainer>
        <Stars id={productId} />
      </StarContainer>

      <div style={{ fontSize: '2em' }}>{overview.category.toUpperCase()}</div>

      <div style={{ fontSize: '3em' }}>{overview.name}</div>

      {renderPrice()}

      <div style={{ margin: '25px 0px', fontSize: '1.5em' }}>
        <b>
          {'STYLE\u00A0\u00A0>\u00A0\u00A0\u00A0\u00A0'}
        </b>
        {selectedStyle.name.toUpperCase()}
      </div>

      <StyleSelector
        styles={styles}
        selectedStyle={selectedStyle}
        setSelectedStyle={setSelectedStyle}
        setIndex={setIndex}
      />

      <AddToCartForm
        selectedStyle={selectedStyle}
        price={selectedStyle.sale_price ? selectedStyle.sale_price : selectedStyle.original_price}
        name={overview.name}
      />

      <ShareContainer>
        <IconButton style={{ backgroundColor: '#4267B2' }}><FacebookIcon /></IconButton>
        <IconButton style={{ backgroundColor: '#1DA1F2' }}><TwitterIcon /></IconButton>
        <IconButton style={{ backgroundColor: '#E60023' }}><PinterestIcon /></IconButton>
      </ShareContainer>

    </InfoContainer>
  );
}
