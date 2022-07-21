import React from 'react';
import styled from 'styled-components';
import AddReviewCharEntry from './AddReviewCharEntry';
import { productChar } from './services/productChar';
import { AddReviewHeader } from './styles';

const CharContainer = styled.div`
  padding-bottom: 1em;
`;

function AddReviewChar() {
  return (
    <CharContainer>
      <AddReviewHeader>
        Characteristics&#42;
      </AddReviewHeader>
      <div>
        {/* {console.log('productChar = ', productChar)} */}
        {Object.keys(productChar).map((char, index) => (
          <AddReviewCharEntry
            char={char}
            description={productChar[char]}
            index={index}
            key={char}
          />
        ))}
      </div>
    </CharContainer>
  );
}

export default AddReviewChar;
