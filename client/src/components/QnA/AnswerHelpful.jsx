import React, { useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import propTypes from 'prop-types';

const Button = styled.button`
  border: none;
  background: none;
  text-decoration: underline;
  font-weight: normal;
`;

const AnswerHelpfulDiv = styled.div`
  font-size: 0.75em;
  display: inline-flex;
  flex-direction: row;
  margin-left: 40px;
  margin-top: 20px;
  margin-bottom: 10px;
`;

function AnswerHelpful({
  answerHelfulness, answerId, answerName, answerDate,
}) {
  const [helpfulToggle, setHelpfulToggle] = useState(false);
  const [reportToggle, setReportToggle] = useState(false);

  const convertDate = (string) => new Date(string.substring(0, 10))
    .toString().substring(0, 10);

  const handleEventPut = (event) => {
    // eslint-disable-next-line no-unused-expressions, no-nested-ternary
    !helpfulToggle && event.target.getAttribute('name') === 'helpful'
      ? (axios.put(`/qa/answers/${answerId}/helpful`)
        .then(() => console.log('added +1 helpful'), setHelpfulToggle(true))
        .catch((err) => console.log(err))
      )
      : !reportToggle && event.target.getAttribute('name') === 'report'
        ? (axios.put(`/qa/answers/${answerId}/report`)
          .then(() => console.log('reported'))
          .catch((err) => console.log(err)), setReportToggle(true))
        : null;
  };
  return (
    <AnswerHelpfulDiv className="answer-helpful-div">
      by&nbsp;
      {' '}
      {answerName}
      ,&nbsp;
      {convertDate(answerDate)}
      &nbsp;Helpful?&nbsp;
      <Button
        className="answer-helpful-button"
        type="button"
        name="helpful"
        onClick={(event) => { handleEventPut(event); }}
      >
        Yes
      </Button>
      &nbsp;(
      {helpfulToggle ? answerHelfulness + 1 : answerHelfulness}
      ) | &nbsp;
      <Button
        className="answer-report"
        type="button"
        name="report"
        onClick={(event) => { handleEventPut(event); }}
      >
        Report
      </Button>
    </AnswerHelpfulDiv>
  );
}

AnswerHelpful.propTypes = {
  answerHelfulness: propTypes.number,
  answerId: propTypes.number,
  answerName: propTypes.string,
  answerDate: propTypes.number,
};

AnswerHelpful.defaultProps = {
  answerHelfulness: 0,
  answerId: 0,
  answerName: '',
  answerDate: 0,
};

export default AnswerHelpful;
