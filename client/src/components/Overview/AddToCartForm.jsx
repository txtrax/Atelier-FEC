import React, { useState } from 'react';
import styled from 'styled-components';
import CartModal from './CartModal';

const AddToCartContainer = styled.div`
  margin: 8% 10%;
  padding: 0 10%;
  height: 130px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const SizeAndQuantity = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SizeDropdown = styled.select`
  font-family: 'Lato', sans-serif;
  font-size: 1em;
  width: 60%;
  height: 3em;
  border: 1px solid;
  border-color: #5D5F71;
  text-align: center;
`;

const QuantityDropdown = styled.select`
  font-family: 'Lato', sans-serif;
  font-size: 1em;
  width: 30%;
  height: 3em;
  border: 1px solid;
  border-color: #5D5F71;
  text-align: center;
`;

const AddToCartButton = styled.button`
  font-family: 'Lato', sans-serif;
  font-size: 1em;
  width: 100%;
  height: 50px;
  border: 1px solid;
  border-radius: 26px;
  border-color: #5D5F71;
  background-color: #5D5F71;
  color: white;
  &:hover {
    border-color: black;
    background-color: black;
  }
`;

const OutOfStockContainer = styled.div`
  font-size: 2em;
  text-align: center;
  color: #DABECA;
`;

export default function AddToCartForm(props) {
  const { selectedStyle, price, name } = props;

  const sizeQuantArr = Object.values(selectedStyle.skus);

  const [size, setSize] = useState(null);
  const [quantity, setQuantity] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [request, setRequest] = useState(null);

  const onQuantitySelect = (e) => {
    setQuantity(e.target.value);
  };

  const getQuantity = (arr) => {
    const targetPair = arr.filter((pair) => pair.size === size);
    const count = targetPair[0].quantity <= 15 ? targetPair[0].quantity : 15;

    const quantityOptions = [];
    for (let i = 1; i <= count; i += 1) {
      const option = (<option value={i} key={i}>{i}</option>);
      quantityOptions.push(option);
    }
    return quantityOptions;
  };

  const handleAddClick = () => {
    if (!size) {
      setRequest(<div style={{ fontSize: '1em' }}><center>Please select size</center></div>);
    }

    if (quantity) {
      setIsOpen(true);
    }
  };

  return (
    <AddToCartContainer>

      <SizeAndQuantity>
        <SizeDropdown id="size" style={{ color: '#5D5F71' }} onClick={() => setRequest(null)} onChange={(e) => { setSize(e.target.value); }}>
          <option value="default">Select Size</option>
          {sizeQuantArr.map((sizeQuan) => (
            <option value={sizeQuan.size} key={sizeQuan.size}>{sizeQuan.size}</option>
          ))}
        </SizeDropdown>

        <QuantityDropdown id="quantity" style={{ color: '#5D5F71' }} onChange={(e) => { onQuantitySelect(e); }}>
          <option value="-">-</option>
          {size && getQuantity(sizeQuantArr).map((option) => option)}
        </QuantityDropdown>
      </SizeAndQuantity>

      { request }

      <ButtonContainer>
        {Object.keys(selectedStyle.skus)[0] !== 'null' ? (
          <AddToCartButton onClick={handleAddClick}>
            Add to Cart
          </AddToCartButton>
        ) : (
          <OutOfStockContainer>-OUT OF STOCK-</OutOfStockContainer>
        )}
      </ButtonContainer>

      {isOpen && (
      <CartModal
        price={price}
        name={name}
        style={selectedStyle.name}
        size={size}
        quantity={quantity}
        photo={selectedStyle.photos[0]}
        setIsOpen={setIsOpen}
      />
      )}

    </AddToCartContainer>
  );
}
