import React, { useState } from 'react';
import styled from 'styled-components';

const PhotoBox = styled.div`
  display: flex;
  height: 100px;
  width: 100px;
  align-items: center;
  margin-left: 20px;
  cursor: pointer;
`;

const AnswerPhoto = styled.img`
  display: flex;
  align-items: center;
  margin: 20px 15px;
  height: 100px;
  width: 100px;
  object-fit: cover;
`;
function AnswerPhotos({ photo }) {
  const [modal, setModal] = useState(false);

  const handlePhotoClick = (event) => {
    setModal(!modal);
  };

  const answerPhotoModal = (
    <div
      className="answer-photo-modal"
      onClick={handlePhotoClick}
    >
      <img
        className="enlarged-answer-photo-modal"
        src={photo}
        onClick={(event) => event.stopPropagation()}
      />
    </div>
  );

  return (
    <div>
      <div className="answer-photo-box">
        <AnswerPhoto
          className="answer-photo"
          src={photo}
          alt="product"
          onClick={handlePhotoClick}
        />
        {modal ? answerPhotoModal : null}
      </div>
    </div>
  );
}
export default AnswerPhotos;