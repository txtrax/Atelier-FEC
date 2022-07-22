import React from 'react';
import propTypes from 'prop-types';
import styled from 'styled-components';
import Answers from './Answers';
import MoreAnswers from './MoreAnswers';
import QuestionHelpful from './QuestionHelpful';

const QuestionsAndAnswersContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 738px;
`;

const QuestionContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

function Question({ question, productId }) {
  const answerKey = Object.keys(question.answers);
  const answerList = answerKey.map((Ans) => question.answers[Ans]);
  return (
    <QuestionsAndAnswersContainer>

      <QuestionContainer className="question-control">
        <div>
          Q:
          {question.question_body}
        </div>
        <div style={{ right: 0 }}>
          <QuestionHelpful
            questionBody={question.question_body}
            productId={productId}
            helpfulness={question.question_helpfulness}
            questionId={question.question_id}
            />
        </div>
      </QuestionContainer>

      <div>
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
    </QuestionsAndAnswersContainer>
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
