import React from 'react';
import propTypes from 'prop-types';
import Answers from './Answers';

function Question({ question, productId }) {
  const answerKey = Object.keys(question.answers);
  const answerList = answerKey.map((Ans) => question.answers[Ans]);
  // console.log(answerList);
  return (
    <div>
      <span>
        Q:
        {question.question_body}
      </span>
      {answerList.map((answer, count) => (
        <Answers
          key={answer.id}
          answer={answer}
        />
      ))}

    </div>
  );
}
Question.propTypes = {
  productId: propTypes.number,
  question: propTypes.shape({}).isRequired,
  // question.question_body: propTypes.string
};

Question.defaultProps = {
  productId: 40351,
  // question: {},
  // question_body: '',
};

export default Question;
