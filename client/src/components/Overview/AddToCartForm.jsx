import React from 'react';
// import { MdOutlineStarOutline } from 'react-icons/md';
import styled from 'styled-components';

const SizeAndQuantity = styled.div`
  margin: 2px;
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

const AddToCartContainer = styled.div`
  margin: 2px;
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
  const { selectedStyle } = props;
  const sizeQuantArr = Object.values(selectedStyle.skus);

  return (
    <>
      <SizeAndQuantity>
        <SizeDropdown>
          <option value="default">Select Size</option>
          {sizeQuantArr.map((sizeQuan) => <option value={sizeQuan.size}>{sizeQuan.size}</option>)}
        </SizeDropdown>
        <QuantityDropdown>
          <option value="1">1</option>
        </QuantityDropdown>
      </SizeAndQuantity>
      <AddToCartContainer>
        <button>Add to Cart</button>
        <button>☆</button>
      </AddToCartContainer>
    </>
  );
}
