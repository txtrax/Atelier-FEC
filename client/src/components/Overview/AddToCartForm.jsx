import React, { useState } from 'react';
import styled from 'styled-components';
import CartModal from './CartModal';

const AddToCartContainer = styled.div`
  height: 115px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const SizeAndQuantity = styled.div`
  position: relative;
  padding: 0px 5px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const SizeDropdown = styled.select`
  width: 175px;
  height: 50px;
  border: 1px solid;
  border-color: #5D5F71;
  text-align: center;
`;

const QuantityDropdown = styled.select`
  width: 75px;
  height: 50px;
  border: 1px solid;
  border-color: #5D5F71;
  text-align: center;
`;

const AddToCartButton = styled.button`
  width: 100%;
  height: 50px;
  border: 1px solid;
  border-radius: 26px;
  background-color: #5D5F71;
  color: white;
`;

export default function AddToCartForm(props) {
  const { selectedStyle, price, name } = props;

  const sizeQuantArr = Object.values(selectedStyle.skus);

  const [clicked, setClicked] = useState(false);
  const [size, setSize] = useState(null);
  const [quantity, setQuantity] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  const onSizeSelect = (e) => {
    setClicked(false);
    setSize(e.target.value);
  };

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

  const showModal = () => {
    if (quantity) {
      setIsOpen(true);
    }
  };

  return (
    <AddToCartContainer>
      <SizeAndQuantity>
        <SizeDropdown id="size" onClick={() => { setClicked(true); }} onChange={(e) => { onSizeSelect(e); }}>
          {clicked ? <option value="default">Please select size</option> : <option value="default">Select Size</option>}
          {sizeQuantArr.map((sizeQuan) => (
            <option value={sizeQuan.size} key={sizeQuan.size}>{sizeQuan.size}</option>
          ))}
        </SizeDropdown>
        <QuantityDropdown id="quantity" onChange={(e) => { onQuantitySelect(e); }}>
          {size ? null : <option value="-">-</option>}
          {size && getQuantity(sizeQuantArr).map((option) => option)}
        </QuantityDropdown>
      </SizeAndQuantity>

      <AddToCartButton onClick={showModal}>
        Add to Cart
      </AddToCartButton>

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
