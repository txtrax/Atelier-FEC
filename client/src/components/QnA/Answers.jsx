import React from 'react';
// import QuestionsList from './QuestionsList';

function Answers({ answer }) {
  return (
    <ol>
      Answer:{answer.body}
    </ol>
  );
}

export default Answers;
