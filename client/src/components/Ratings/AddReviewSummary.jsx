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

function AddReviewSummary({ setSummary }) {
  return (
    <Container>
      <AddReviewHeader>Review summary</AddReviewHeader>
      <form>
        <InputBar type="text" placeholder="Example: Best purchase ever!" maxLength="60" onChange={(e) => setSummary(e.target.value)} />
      </form>
    </Container>
  );
}

AddReviewSummary.propTypes = {
  setSummary: PropTypes.func,
};

AddReviewSummary.defaultProps = {
  setSummary: (e) => e,
};

export default AddReviewSummary;
