import React, { useState } from 'react';
import styled from 'styled-components';
import { CgCloseO } from 'react-icons/cg';
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
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 70%;
  height:
  background: white;
  padding-left: 2em;
  padding-right: 2em;
  padding-top: 2em;
  padding-bottom: 2em;
  border: 3px solid black;
  border-radius: 15px;
  overflow: auto;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  width: 30px;
  height: 30px;
  background: transparent;
  padding: 0;
  border: 0;
`;

const CloseSymbol = styled(CgCloseO)`
  display:flex;
  align-items: center;
  align-content: center;
  width: 100%;
  height: 100%;
`;

const Image = styled.img`
  width: 70%;
  hieght: auto;
`;

function PhotoModal({ showPhoto, setShowPhoto, photoURL }) {
  if (showPhoto) {
    console.log('In PhotoModal, photoURL = ', photoURL);
    return (
      <Modal>
        <div>
          <CloseButton
            type="button"
            onClick={() => setShowPhoto(false)}
          >
            <CloseSymbol />
          </CloseButton>
        </div>
        <img src={photoURL} alt="modal" />
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
