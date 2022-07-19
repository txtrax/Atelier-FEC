import React from 'react';
import propTypes from 'prop-types';
import Question from './Question';

function QuestionsList({ questions, productId }) {
  // const answerKey = questions.answers;
  // console.log(answerKey, 'keyyy');
  return (
    <div>
      {questions.map((question, count) => (
        <Question
          question={question}
          productId={productId}
          key={question.question_id}
        />
      ))}
    </div>
  );
}

QuestionsList.propTypes = {
  productId: propTypes.number,
  questions: propTypes.arrayOf(propTypes.objectOf(propTypes.any)),
};

QuestionsList.defaultProps = {
  productId: 40351,
  questions: [],
};

export default QuestionsList;
