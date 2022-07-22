import React, { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { AddReviewHeader } from './styles';

const InputBar = styled.input`
  width: 70%;
  border-radius: 4px;
  padding-bottom: 2em;
`;

const InputNote = styled.div`
  font-size: 0.8em;
  font-style: italic;
  padding-top: 0.25em;
  padding-bottom: 1em;
`;

function AddReviewBody({ setBody }) {
  const [inputLen, setInputLen] = useState(0);

  function countInput(e) {
    // console.log(e.target.value.length);
    setInputLen(e.target.value.length);
    setBody(e.target.value);
  }

  let displayLen;
  if (inputLen > 0 && inputLen < 50) {
    const charLeft = 50 - inputLen;
    displayLen = `Minimum required characters left: ${charLeft}`;
  } else if (inputLen > 50) {
    displayLen = 'Minimum reached';
  } else {
    displayLen = 'Minimum required characters: 50';
  }

  return (
    <div>
      <AddReviewHeader>Review&#42;</AddReviewHeader>
      <form>
        <InputBar type="text" placeholder="Why do you like the product?" maxLength="1000" onChange={(e) => countInput(e)} />
      </form>
      <InputNote>
        {displayLen}
      </InputNote>
    </div>

  );
}

AddReviewBody.propTypes = {
  setBody: PropTypes.func,
};

AddReviewBody.defaultProps = {
  setBody: (e) => e,
};

export default AddReviewBody;
