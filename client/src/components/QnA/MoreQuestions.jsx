import React, { useState } from 'react';
import Question from './Question';

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
      {/* { button } */}
      {
        collapseQuestions
          ? (
            <>
              (
              <button
                type="button"
                className="more-questions"
                onClick={() => {
                  setCollapseQuestions(!collapseQuestions);
                }}
              >
                More Answered Questions
              </button>
              )
            </>
          )
          : (
            <>
              {questions.slice(4).map((question) => (
                <Question question={question} key={question.question_id} />
              ))}
              <button
                type="button"
                className="more-questions"
                onClick={() => {
                  setCollapseQuestions(!collapseQuestions);
                }}>
                Collapse Questions
              </button>
            </>
          )
      }
    </div>
  );
}

export default MoreQuestions;
