import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import ProductBreakdownEntry from './ProductBreakdownEntry';

const ProductContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const Header = styled.div`
  font-size: 1.1em;
  padding-bottom: 0.5em;
`;

const Slider = styled.input`
  -webkit-appearance: none;
  width: 100%;
  height: 10px;
  background: #d3d3d3;
  opacity: 0.7;
  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    width: 0px;
    height: 0px;
    border-left: 7px solid transparent;
    border-right: 7px solid transparent;
    border-top: 15px solid #575b54;
  }
`;
const Char = styled.div`
`;

function ProductBreakdown({ product }) {
  const ProductChar = {
    Size: ['Too small', 'Too large'],
    Width: ['Too narrow', 'Too wide'],
    Comfort: ['Uncomforatble', 'Perfect'],
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
