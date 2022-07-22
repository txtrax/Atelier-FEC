import React from 'react';
import styled from 'styled-components';
import { MdClose } from 'react-icons/md';

const Background = styled.div`
  display: block;
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgb(0,0,0);
  background-color: rgba(0,0,0,0.7);
`;

const ModalContent = styled.div`
  position: relative;
  background-color: #fefefe;
  margin: 15% auto;
  border: 1px solid #888;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  width: 500px;
  height: 350px;
`;

const ExitIcon = styled(MdClose)`
  position: absolute;
  padding: 2px;
  object-fit: cover;
  color: black;
  top: 10px;
  right: 10px;
  width: 27px;
  height: 27px;
  opacity: 0.5;
  &:hover {
    opacity: 1;
  }
`;

const CheckoutContainer = styled.div`
  display: flex;
  object-fit: cover;
  color: black;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
  background-color: #DABECA;
  height: 300px;
`;

const CheckOutButton = styled.button`
  display: flex;
  position: absolute;
  top: 65px;
  justify-content: center;
  font-family: 'Lato', sans-serif;
  align-items: center;
  width: 50%;
  height: 43px;
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

const ProductDetails = styled.div`
  display: flex;
  flex-direction: row;
  font-size: 1em;
  padding: 0px 20px 20px 20px;
`;

const ImageContainer = styled.div`
  display: flex;
  align-items: center;
  width: 40%;
  padding: 20px 0px 0px 0px;
`;

const CartContainer = styled.div`
  padding: 50px 0px 50px 0px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 60%;
`;

export default function CartModal(props) {
  const {
    name, photo, price, quantity, size, style, setIsOpen,
  } = props;

  return (
    <Background>
      <ModalContent>
        <CheckoutContainer>

          <ExitIcon onClick={() => setIsOpen(false)} />

          <p style={{ fontSize: '1.5em' }}>
            Subtotal: $
            {price * quantity}
          </p>

          <CheckOutButton style={{ fontSize: '1em' }}>
            Checkout
          </CheckOutButton>

        </CheckoutContainer>
        <ProductDetails>

          <ImageContainer>

            <img style={{ width: '165px', height: '165px', objectFit: "cover" }} src={photo.thumbnail_url} />

          </ImageContainer>
          <CartContainer>

            <p>{`${name} - ${style} (${size})`}</p>

            <p>
              {`${quantity}\u00A0\u00A0\u00A0\u00A0x\u00A0\u00A0\u00A0\u00A0$${price}`}
            </p>

          </CartContainer>

        </ProductDetails>
      </ModalContent>
    </Background>
  );
}
