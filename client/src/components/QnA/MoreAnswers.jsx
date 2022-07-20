import React, { useState } from 'react';
import Answers from './Answers.jsx';

function MoreAnswers({ answer, answerList }) {
  const [collapseAnswers, setCollapseAnswers] = useState(true);

  return (
    <div>
      {
        collapseAnswers
          ? (
            <button
              className="more-answers"
              type="button"
              onClick={() => {
                setCollapseAnswers(!collapseAnswers);
              }}
            >
              More Answers
            </button>
          )
          : (
            <>
              {answerList.slice(2).map((answer) => (
                <Answers answer={answer} key={answer.id} />
              ))}
              <div>
                <button
                  className="more-answers"
                  type="button"
                  onClick={() => {
                    setCollapseAnswers(!collapseAnswers);
                  }}
                >
                  Collapse Answers
                </button>
              </div>
            </>
          )
      }
    </div>
  );
}

export default MoreAnswers;
