import React, { useState } from 'react';

function AnswerHelpful({ answerHelfulness, answerId, answerName }) {
  return (
    <div className="answer-helpful-div">
      <>by {answerName}</>&nbsp;Helpful?&nbsp;
      <button
        className="answer-helpful-button"
        type="button"
        name="helpful"
        onClick={(event) => { handleEventPut(event) }}
      > Yes </button>
      &#40;{answerHelfulness}&#41;
    </div>
  );
}

export default AnswerHelpful;
