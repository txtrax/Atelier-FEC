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

  // grab siz from size dropdown
  // adjust quantity dropdown according to size selection
  // on add-to-cart click, save price and
  const onSizeSelect = (e) => {
    setClicked(false);
  };

  return (
    <>
      <SizeAndQuantity>
        <SizeDropdown id="size" onClick={() => { setClicked(true); }} onChange={() => { onSizeSelect; }}>
          {clicked ? <option value="default">Please select size</option> : <option value="default">Select Size</option>}
          {sizeQuantArr.map((sizeQuan) => <option value={sizeQuan.size}>{sizeQuan.size}</option>)}
        </SizeDropdown>
        <QuantityDropdown>
          <option value="1">1</option>
        </QuantityDropdown>
      </SizeAndQuantity>
      <AddToCartContainer>
        <button>Add to Cart</button>
        <button onClick={() => { setAd('(ﾉ◕ヮ◕)ﾉ*:･ﾟ✧ I love you ✧ﾟ･: *ヽ(◕ヮ◕ヽ)'); }}>☆</button>
      </AddToCartContainer>
    </>
  );
}
