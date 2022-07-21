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
  width: 40%;
`;

const ExitIcon = styled(MdClose)`
  position: absolute;
  padding: 2px;
  object-fit: cover;
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
  color: white;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
  background-color: #BF8B85;
  padding: 20px 12px 20px 12px;
  height: 75px;
`;

const CheckOutButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
  height: 50px;
  border: 1px solid;
  border-radius: 26px;
  background-color: black;
  color: white;
`;

const ProductDetails = styled.div`
  display: flex;
  flex-direction: row;
  padding: 0px 20px 20px 20px;
`;

const ImageContainer = styled.div`
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

          <p>
            Subtotal: $
            {price * quantity}
          </p>

          <CheckOutButton>
            Checkout
          </CheckOutButton>

        </CheckoutContainer>
        <ProductDetails>

          <ImageContainer>

            <img style={{ width: '90%', height: 'auto' }} src={photo.thumbnail_url} />

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
