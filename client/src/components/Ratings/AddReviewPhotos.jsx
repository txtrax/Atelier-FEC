import React from 'react';
import styled from 'styled-components';
import { AddReviewHeader } from './styles';

const Container = styled.div`
  padding-bottom: 1em;
`;

function AddReviewPhotos() {
  function handleFileInputChange() {

  }
  return (
    <Container>
      <AddReviewHeader>Upload your photos</AddReviewHeader>
      <form on>
        <input type="file" name="upload" accept="image/*" onChange={handleFileInputChange} multiple />
      </form>
    </Container>
  );
}

export default AddReviewPhotos;
