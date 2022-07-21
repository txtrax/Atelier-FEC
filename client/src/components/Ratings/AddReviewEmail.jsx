import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { AddReviewHeader } from './styles';

const Container = styled.div`
  padding-bottom: 1em;
`;

const InputBar = styled.input`
  width: 70%;
  border-radius: 4px;
`;

const InputNote = styled.div`
  font-size: 0.8em;
  font-style: italic;
  padding-top: 0.25em;
  padding-bottom: 1em;
`;

function AddReviewEmail({ setEmail }) {
  function checkEmail(e) {
    console.log('onfocusOut', e.target.value);
  }
  return (
    <Container>
      <AddReviewHeader>Your email&#42;</AddReviewHeader>
      <form>
        <InputBar
          // type="email"
          type="text"
          placeholder="Example: jackson11!@email.com"
          maxLength="60"
          // pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
          // onfocusout={(e) => checkEmail(e)}
          onChange={(e) => setEmail(e.target.value)}
        />
      </form>
      <InputNote>
        For authentication reasons, you will not be emailed
      </InputNote>
    </Container>
  );
}

AddReviewEmail.propTypes = {
  setEmail: PropTypes.func,
};

AddReviewEmail.defaultProps = {
  setEmail: (e) => e,
};

export default AddReviewEmail;
