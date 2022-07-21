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

function AddReviewNickname({ setName }) {
  return (
    <Container>
      <AddReviewHeader>Your nickname&#42;</AddReviewHeader>
      <form>
        <InputBar type="text" placeholder="Example: jackson11!" maxLength="60" onChange={(e) => setName(e.target.value)} />
      </form>
      <InputNote>
        For privacy reasons, do not use your fill name or email address
      </InputNote>
    </Container>
  );
}

AddReviewNickname.propTypes = {
  setName: PropTypes.func,
};

AddReviewNickname.defaultProps = {
  setName: (e) => e,
};


export default AddReviewNickname;
