import React, { useState } from 'react';
import Question from './Question';

function MoreQuestions({ questions }) {
  const [collapseQuestions, setCollapseQuestions] = useState(true);

  return (
    <div>
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
