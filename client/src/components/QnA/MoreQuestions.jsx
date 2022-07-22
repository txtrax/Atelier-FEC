import React, { useState } from 'react';
import Question from './Question';
import styled from 'styled-components';

const MoreQuestionButton = styled.button`
  font-size: medium;
  height: 60px;
  width: 235px;
  padding: 10px;
  margin: 25px;
  cursor: pointer;
  transition: all ease 0.3s;
  float: left;
`;

const CollapsoeQuestionButton = styled.button`
  font-size: medium;
  height: 60px;
  width: 235px;
  padding: 10px;
  margin: 25px;
  cursor: pointer;
  transition: all ease 0.3s;
  float: left;
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
              <CollapsoeQuestionButton
                onClick={() => {
                  setCollapseQuestions(!collapseQuestions);
                }}
              >
                Collapse Questions
              </CollapsoeQuestionButton>
            </>
          )
      }
    </div>
  );
}

export default MoreQuestions;
