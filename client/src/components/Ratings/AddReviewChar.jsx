import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import AddReviewCharEntry from './AddReviewCharEntry';
import { productChar } from './services/productChar';
import { AddReviewHeader } from './styles';

const CharContainer = styled.div`
  padding-bottom: 1em;
`;

function AddReviewChar({ product, setCharacteristics, characteristics }) {
  return (
    <CharContainer>
      <AddReviewHeader>
        Characteristics&#42;
      </AddReviewHeader>
      <div>
        {Object.keys(productChar).map((char) => {
          if (product[char]) {
            return (
              <AddReviewCharEntry
                setCharacteristics={setCharacteristics}
                product={product}
                char={char}
                description={productChar[char]}
                characteristics={characteristics}
                key={char}
              />
            );
          }
        })}
      </div>
    </CharContainer>
  );
}

AddReviewChar.propTypes = {
  product: PropTypes.objectOf(PropTypes.oneOfType([PropTypes.any])),
  setCharacteristics: PropTypes.func,
  characteristics: PropTypes.objectOf(PropTypes.oneOfType([PropTypes.any])),
};

AddReviewChar.defaultProps = {
  product: {},
  setCharacteristics: (e) => e,
  characteristics: {},
};

export default AddReviewChar;
