import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import ProductBreakdownEntry from './ProductBreakdownEntry';

const ProductContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

function ProductBreakdown({ product }) {
  const ProductChar = {
    Size: ['Too small', 'Too large'],
    Width: ['Too narrow', 'Too wide'],
    Comfort: ['Uncomfortable', 'Perfect'],
    Quality: ['Poor', 'Perfect'],
    Length: ['Too short', 'Too long'],
    Fit: ['Too tight', 'Too long'],
  };

  return (
    <ProductContainer>
      {Object.entries(product).map((entry) => {
        // console.log('Product = ', product, 'ENTRY = ', entry);
        const [char, value] = entry;
        // console.log('key', key);
        // console.log('value', value);
        const description = ProductChar[char];
        // console.log('characteristic', characteristic);
        return (
          <ProductBreakdownEntry
            char={char}
            value={value}
            description={description}
            key={char}
          />
        );
      })}
    </ProductContainer>
  );
}

ProductBreakdown.propTypes = {
  product: PropTypes.objectOf(PropTypes.objectOf(PropTypes.any)),
};

ProductBreakdown.defaultProps = {
  product: {},
};

export default ProductBreakdown;
