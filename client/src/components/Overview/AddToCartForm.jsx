import React, { useState } from 'react';
import styled from 'styled-components';
import { MdOutlineStarOutline } from 'react-icons/md';

const SizeAndQuantity = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const SizeDropdown = styled.select`
  width: 175px;
  height: 52px;
  border: 1px solid;
  text-align: center;
`;

const QuantityDropdown = styled.select`
  width: 75px;
  height: 52px;
  border: 1px solid;
  text-align: center;
`;

const AddToCartContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const AddToCartButton = styled.button`
  width: 100%;
  height: 52px;
  border: 1px solid;
  border-radius: 26px;
  background-color: black;
  color: white;
`;

export default function AddToCartForm(props) {
  const { selectedStyle, price } = props;
  const sizeQuantArr = Object.values(selectedStyle.skus);

  const [clicked, setClicked] = useState(false);
  const [size, setSize] = useState(null);
  const [quantity, setQuantity] = useState(null);

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

  if (quantity) {
    console.log(`this is size: ${size}`, `this is quantity: ${quantity}`);
  }

  return (
    <>
      <SizeAndQuantity>

        <SizeDropdown id="size" onClick={() => { setClicked(true); }} onChange={(e) => { onSizeSelect(e); }}>

          {clicked ? <option value="default">Please select size</option> : <option value="default">Select Size</option>}

          {sizeQuantArr.map((sizeQuan) => <option value={sizeQuan.size} key={sizeQuan.size}>{sizeQuan.size}</option>)}
        </SizeDropdown>

        <QuantityDropdown id="quantity" onChange={(e) => { onQuantitySelect(e); }}>
          {size ? null : <option value="-">-</option>}
          {size && getQuantity(sizeQuantArr).map((option) => option)}
        </QuantityDropdown>

      </SizeAndQuantity>

      <AddToCartContainer>

        <AddToCartButton>
          Add to Cart
        </AddToCartButton>

      </AddToCartContainer>
    </>
  );
}
