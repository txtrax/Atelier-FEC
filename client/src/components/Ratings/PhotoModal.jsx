import React from 'react';
import styled from 'styled-components';
import { AiFillCloseCircle } from 'react-icons/ai';
import PropTypes from 'prop-types';

// const ModalBackground = styled.div`
//   display: none; /* Hidden by default */
//   position: fixed; /* Stay in place */
//   z-index: 1; /* Sit on top */
//   padding-top: 100px; /* Location of the box */
//   left: 0;
//   top: 0;
//   width: 100%; /* Full width */
//   height: 100%; /* Full height */
//   overflow: auto; /* Enable scroll if needed */
//   background-color: rgb(0,0,0); /* Fallback color */
//   background-color: rgba(0,0,0,0.9); /* Black w/ opacity */
// `;

const Modal = styled.div`
  display:flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  padding-left: 2em;
  padding-right: 2em;
  padding-top: 2em;
  padding-bottom: 2em;
  border: 3px solid  #BF8B85;
  border-radius: 15px;
  overflow: auto;
`;

const CloseSymbol = styled(AiFillCloseCircle)`
  position: absolute;
  width: 25px;
  height: 25px;
  top: 0px;
  right: 0px;
  color: #BF8B85;
  cursor: pointer;
  opacity: 0.8;
  &:hover {
    opacity: 1;
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: 5px;
  right: 5px;
  width: 40px;
  height: 40px;
  background: transparent;
  padding: 0;
  border: 0;
`;

// const CloseButton = styled.button`
//   position: absolute;
//   top: 10px;
//   right: 10px;
//   width: 30px;
//   height: 30px;
//   background: transparent;
//   padding: 0;
//   border: 0;
// `;

// const CloseSymbol = styled(CgCloseO)`
//   display:flex;
//   align-items: center;
//   align-content: center;
//   width: 100%;
//   height: 100%;
// `;

const Image = styled.img`
  max-width:600px;
  max-height:400px;
}
`;

function PhotoModal({ showPhoto, setShowPhoto, photoURL }) {
  if (showPhoto) {
    // console.log('In PhotoModal, photoURL = ', photoURL);
    return (
      <Modal>
        <div>
          <CloseButton
            type="button"
            onClick={() => {
              document.documentElement.style.overflow = 'auto';
              setShowPhoto(false);
            }}
          >
            <CloseSymbol />
          </CloseButton>
        </div>
        <Image src={photoURL} alt="modal" />
      </Modal>
    );
  }
}

PhotoModal.propTypes = {
  showPhoto: PropTypes.bool,
  setShowPhoto: PropTypes.func,
  photoURL: PropTypes.string,
};

PhotoModal.defaultProps = {
  showPhoto: true,
  setShowPhoto: (e) => e,
  photoURL: '',
};

export default PhotoModal;
