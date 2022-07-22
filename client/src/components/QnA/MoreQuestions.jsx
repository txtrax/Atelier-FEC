import React, { useState } from 'react';
import styled from 'styled-components';
import Question from './Question';

const MoreQuestionButton = styled.button`
  margin-right: 1em;
  padding: 1em 1em;
  font-size: 1.2em;
  font-weight: bold;
  background: white;
`;

const CollapseQuestionButton = styled.button`
  margin-right: 1em;
  padding: 1em 1em;
  font-size: 1.2em;
  font-weight: bold;
  background: white;
`;

// const QuestionListContainer = styled.div`
//   overflow-y: scroll;
//   height: 500px;
// `;

function MoreQuestions({ questions, displayQuestions, setDisplayQuestions }) {
  const [collapseQuestions, setCollapseQuestions] = useState(true);
  // let button;
  // if (questions.length > displayQuestions.length) {
  //   button = (
  //     <button
  //       type="button"
  //       onClick={() => {
  //         setDisplayQuestions(questions.slice(0, displayQuestions.length + 2));
  //         setCollapseQuestions(!collapseQuestions);
  //         // console.log(displayQuestions, 'testtttt');
  //       }}
  //     >
  //       {console.log(displayQuestions, 'testttt')}
  //       More Answered Questions
  //     </button>
  //   );
  // }
  return (
    <div>
      {
        collapseQuestions
          ? (
            <MoreQuestionButton
              onClick={() => {
                setCollapseQuestions(!collapseQuestions);
              }}
            >
              More Answered Questions
            </MoreQuestionButton>
          )
          : (
            <>
              {questions.slice(0, 4).map((question) => (
                <Question question={question} key={question.question_id} />
              ))}
              <CollapseQuestionButton
                onClick={() => {
                  setCollapseQuestions(!collapseQuestions);
                }}
              >
                Collapse Questions
              </CollapseQuestionButton>
            </>
          )
      }
    </div>
  );
}

export default MoreQuestions;
