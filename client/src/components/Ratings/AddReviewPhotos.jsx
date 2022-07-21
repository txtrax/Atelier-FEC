import React from 'react';
import styled from 'styled-components';
import { AddReviewHeader } from './styles';

const Container = styled.div`
  padding-bottom: 1em;
`;

const Button = styled.input`
  padding: 0.5em 0.5em;
  font-size: 1em;
  background: white;
`;

function AddReviewPhotos() {
  function handleFileInputChange() {

  }
  return (
    <Container>
      <AddReviewHeader>Upload your photos</AddReviewHeader>
      <form on>
        <Button
          type="file"
          name="upload"
          accept="image/*"
          // eslint-disable-next-line react/jsx-no-bind
          onChange={handleFileInputChange}
          multiple
        />
      </form>
    </Container>
  );
}

export default AddReviewPhotos;
