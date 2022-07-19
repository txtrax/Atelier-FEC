import React, { useState } from 'react';
// import { MdOutlineStarOutline } from 'react-icons/md';
import styled from 'styled-components';

const SizeAndQuantity = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

const AddToCartContainer = styled.div`
  padding: 0px 0px 20px 0px;
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

const SizeDropdown = styled.select`
  background-color: white;
`;

const QuantityDropdown = styled.select`
  background-color: white;
`;

export default function AddToCartForm(props) {
  const { selectedStyle, price, setAd } = props;
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
    for (let i = 2; i <= count; i += 1) {
      const option = (<option value={i} key={i}>{i}</option>);
      quantityOptions.push(option);
    }
    return quantityOptions;
  };

  if (quantity) {
    console.log("this is size: " + size, "this is quantity: " + quantity);
  }

  return (
    <>
      <SizeAndQuantity>

        <SizeDropdown id="size" onClick={() => { setClicked(true); }} onChange={(e) => { onSizeSelect(e); }}>

          {clicked ? <option value="default">Please select size</option> : <option value="default">Select Size</option>}

          {sizeQuantArr.map((sizeQuan) => <option value={sizeQuan.size} key={sizeQuan.size}>{sizeQuan.size}</option>)}

        </SizeDropdown>

        <QuantityDropdown id="quantity" onChange={(e) => { onQuantitySelect(e); }}>

          <option value="1">1</option>

          {size && getQuantity(sizeQuantArr).map((option) => option)}

        </QuantityDropdown>

      </SizeAndQuantity>

      <AddToCartContainer>

        <button className="add-to-cart" type="button" style={{ display: 'block' }}>Add to Cart</button>

        <button onClick={() => { setAd('(ﾉ◕ヮ◕)ﾉ*:･ﾟ✧ I love you ✧ﾟ･: *ヽ(◕ヮ◕ヽ)'); }}>☆</button>

      </AddToCartContainer>
    </>
  );
}
