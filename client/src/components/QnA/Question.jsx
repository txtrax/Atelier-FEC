import React from 'react';
import propTypes from 'prop-types';
import Answers from './Answers';
import MoreAnswers from './MoreAnswers';
import QuestionHelpful from './QuestionHelpful';

function Question({ question, productId }) {
  const answerKey = Object.keys(question.answers);
  const answerList = answerKey.map((Ans) => question.answers[Ans]);
  return (
    <div className="question">
      <span className="question-control">
        Q:
        {question.question_body}
        <QuestionHelpful
          questionBody={question.question_body}
          productId={productId}
          helpfulness={question.question_helpfulness}
          questionId={question.question_id}
        />
      </span>
      {answerList.slice(0, 3).map((answer, count) => (
        count > 1
          ? <MoreAnswers answerList={answerList} answer={answer} key={0} />
          : (
            <Answers
              key={answer.id}
              answer={answer}
            />
          )
      ))}
    </div>
  );
}
Question.propTypes = {
  productId: propTypes.number,
  // question_body: propTypes.string,
  question: propTypes.objectOf(propTypes.oneOf(propTypes.any)).isRequired,
};

Question.defaultProps = {
  productId: 40353,
  // question: {},
};

export default Question;
