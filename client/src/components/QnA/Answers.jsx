import React from 'react';
// import QuestionsList from './QuestionsList';
import AnswerHelpful from './AnswerHelpful';

function Answers({ answer }) {
  return (
    <div className="answer-div">
      <div className="answer"> A: {answer.body}</div>
      <div className="photo-div"></div>
      <AnswerHelpful
        answerId={answer.id}
        answerHelfulness={answer.helpfulness}
        answerDate={answer.date}
        answerName={answer.answerer_name}
      />
    </div>
  );
}

export default Answers;
