import React, { useState } from 'react';
import axios from 'axios';

function AddQuestion({ productId, handleModalClose, openModal }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [questionBody, setQuestionBody] = useState('');

  const selectModal = (event) => {
    event.stopPropagation();
    handleModalClose();
  };

  const verifyEmail = (emailInput) => {
    const characterTest = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return characterTest.test(emailInput);
  };
  // const fillData = (event) => {
  //   event.target.placeholder === 'email_handle@gmail.com'
  //     ? setEmail(event.target.value)
  //     : event.target.placeholder === 'david123'
  //       ? setName(event.target.value)
  //       : setQuestionBody(event.target.value);
  // };

  const fillData = (event) => {
    if (event.target.placeholder === 'email_handle@gmail.com') {
      return setEmail(event.target.value);
    } if (event.target.placeholder === 'david123') {
      return setName(event.target.value);
    }
    return setQuestionBody(event.target.value);
  };

  const handleSubmitQuestion = () => {
    if (verifyEmail(email)) {
      axios.post('/qa/questions', {
        body: questionBody,
        name,
        email,
        product_id: productId,
      })
        .then((response) => {
          console.log('question posted', response.data);
          handleModalClose();
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      return null;
    }
  };

  const QuestionModal = (
    <div
      className="question-modal"
      onClick={(event) => selectModal(event)}
    >
      <div
        className="question-modal-control"
        onClick={(event) => event.stopPropagation()}
      >
        <span
          className="close-button"
          onClick={(event) => selectModal(event)}
        >
          &times;
        </span>
        <form className="question-modal-form">
          <p className="modal-question-title">
            Ask your Question
          </p>

          <label className="modal-label" htmlFor="email"> Email:</label>
          <input
            className="question-email-input"
            onChange={(event) => { fillData(event); }}
            placeholder="email_handle@gmail.com"
            type="email"
            name="email"
            autoComplete="off"
            value={email}
            required
          />

          {/* <p className="answer-modal">
            Email will be use for authentication
          </p> */}

          <label className="modal-label" htmlFor="name"> Nickname:</label>
          <input
            className="question-email-input"
            onChange={(event) => { fillData(event); }}
            placeholder="david123"
            type="text"
            name="name"
            autoComplete="off"
            value={name}
            required
          />

          <label className="modal-label" htmlFor="question"> Question:</label>
          <textarea
            className="question-add"
            onChange={(event) => { fillData(event); }}
            placeholder="Enter your question"
            type="text"
            name="question"
            autoComplete="off"
            value={questionBody}
            required
          />

          <input
            className="submit-question"
            type="submit"
            value="Submit Question"
            onClick={(event) => handleSubmitQuestion(event)}
          />
        </form>

      </div>
    </div>
  );
  // console.log(questionBody);

  let renderValue = null;
  if (openModal) {
    renderValue = QuestionModal;
  }
  return (
    renderValue
  );
}

export default AddQuestion;
