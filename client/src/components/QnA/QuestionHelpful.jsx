import React, { useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';

const QuestionHelpfulDiv = styled.div`
  font-size: 1em;
  display: inline-flex;
  flex-direction: row;
  right: 0;
  top: 0;
`;
const AnswerModalDiv = styled.div`
  display: flex;
  flex-direction: column;
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  background: white;
  padding-left: 2em;
  padding-right: 2em;
  padding-top: 2em;
  padding-bottom: 2em;
  border: 3px solid black;
  border-radius: 15px;
`;

const Button = styled.button`
  border: none;
  background: none;
  text-decoration: underline;
  font-weight: normal;
`;

function QuestionHelpful({ questionBody, helpfulness, questionId, productId }) {
  const [helpfulToggle, setHelpfulToggle] = useState(false);
  const [addAnswerModal, setAddAnswerModal] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [answerBody, setAnswerBody] = useState('');
  const [images, setImages] = useState([]);

  const handleCloseModal = ((event) => {
    event.stopPropagation();
    setAddAnswerModal(false);
  });

  const verifyEmail = (email) => {
    const characterTest = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return characterTest.test(email);
  };

  const toggleHelpfulQuestion = () => {
    helpfulToggle
      ? console.log('already toggled')
      : axios.put(`qa/questions/${questionId}/helpful`)
        .then(() => console.log('+1 question helful'))
        .catch((err) => console.log(`Err at Marked helpful in Q&A widget ${questionId} ${err}`));
    setHelpfulToggle(true);
  };

  const dataFill = (event) => {
    event.target.placeholder === 'Example: jack@email.com'
      ? setEmail(event.target.value)
      : event.target.placeholder === 'Example: jack543!'
        ? setName(event.target.value)
        : setAnswerBody(event.target.value);
  };

  const addAnswerImg = (event) => {
    const photos = [];
    photos.push((event.target.value));
    setImages(photos);
  };

  const handleAddAnswer = (event) => {
    if (verifyEmail(email) && name.length && answerBody.length) {
      axios.post(`/qa/questions/${questionId}/answers`, {
        body: answerBody,
        name,
        email,
        photos: images,
        questionId,
      })
        .then((response) => {
          console.log('answer posted', response.data);
          setAddAnswerModal(false);
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      return null;
    }
  };

  const addAnswerModalBody = (
    <AnswerModalDiv className="answer-modal" onClick={(event) => handleCloseModal(event)}>
      <div className="answer-modal-control" onClick={(event) => event.stopPropagation()}>
        <span
          className="answer-modal-close-x"
          onClick={(event) => handleCloseModal(event)}
        >
          &times;
        </span>
        <p className="modal-question-title">
          Q:
          {questionBody}
        </p>
        <form className="answer-modal-form">

          <label className="modal-label" htmlFor="email">Email:</label>
          <input
            className="answer-modal-email"
            placeholder="Example: jack@email.com"
            value={email}
            type="email"
            name="email"
            maxLength="60"
            autoComplete="off"
            onChange={(event) => { event.preventDefault(); dataFill(event); }}
            required
          />

          <label className="modal-label" htmlFor="name">Nickname:</label>
          <input
            className="answer-modal-name"
            placeholder="Example: jack543!"
            type="text"
            name="name"
            maxLength="75"
            autoComplete="off"
            value={name}
            onChange={(event) => { event.preventDefault(); dataFill(event); }}
            required />

          <label className="modal-label" htmlFor="answer">Answer:</label>
          <textarea
            className="answer-modal-body"
            placeholder="Enter Answer Here..."
            type="text"
            name="answer"
            maxLength="1000"
            minLength="1"
            autoComplete="off"
            value={answerBody}
            onChange={(event) => { event.preventDefault(); dataFill(event); }}
            required
          />

          <label className="modal-label" htmlFor="imageUpload">Img URL:</label>
          <input className="answer-modal-img"
            placeholder="Image URL..."
            type="text"
            name="imageUpload"
            value={images}
            onChange={(event) => { event.preventDefault(); addAnswerImg(event); }}
          />

          <button
            className="submit-answer-form-button"
            type="submit"
            onClick={(event) => handleAddAnswer(event)}
          >
            Submit Answer
          </button>
        </form>

      </div>

    </AnswerModalDiv>
  );

  return (
    <QuestionHelpfulDiv>
      &nbsp;Helpful?&nbsp;
      <Button
        className="helpful-button"
        disabled={helpfulToggle}
        onClick={() => toggleHelpfulQuestion()}
        style={{
          textDecoration: 'underline',
          cursor: 'pointer',
        }}
      >
        Yes
      </Button>
      &nbsp;(
      {helpfulToggle ? helpfulness + 1 : helpfulness}
      ) | &nbsp;

      <Button
        className="add-answer"
        onClick={() => setAddAnswerModal(true)}
        style={{
          textDecoration: 'underline',
          cursor: 'pointer',
        }}
      >
        Add Answer
      </Button>
      <div>{addAnswerModal ? addAnswerModalBody : null}</div>
    </QuestionHelpfulDiv>
  );
}

export default QuestionHelpful;
