import React from 'react';
// import QuestionsList from './QuestionsList';
import AnswerHelpful from './AnswerHelpful';
import AnswerPhotos from './AnswerPhotos';
function Answers({ answer }) {
  return (
    <div className="answer-div">
      <div className="answer"> A: {answer.body}</div>
      <div className="photo-div"></div>
      {answer.photos.length ? answer.photos.map((photo, id) => (
        <AnswerPhotos photo={photo} key={id} />
      ))
        : null}
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
