import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Header = styled.div`
  font-size: 1.1em;
  font-weight: bolder;
  padding-bottom: 0.5em;
  padding-left: 2px;
`;

const Slider = styled.input`
  -webkit-appearance: none;
  width: 100%;
  height: 6px;
  margin-bottom: 0.5em;
  background: #d3d3d3;
  opacity: 0.7;
  border-radius: 2px;
  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    width: 0px;
    height: 0px;
    margin-top:5px;
    border-left: 6px solid transparent;
    border-right: 6px solid transparent;
    border-top: 12px solid #575b54;
  }
`;
const Char = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  padding-bottom: 1em;
  padding-left: 2px;
`;

function ProductBreakdownEntry({ char, value, description }) {
  // const ProductChar = {
  //   Size: ['Too small', 'Too large'],
  //   Width: ['Too narrow', 'Too wide'],
  //   Comfort: ['Uncomforatble', 'Perfect'],
  //   Quality: ['Poor', 'Perfect'],
  //   Length: ['Too short', 'Too long'],
  //   Fit: ['Too tight', 'Too long'],
  // };

  return (
    <div>
      {/* {console.log('value = ', value)} */}
      <Header>
        {char}
      </Header>
      <Slider type="range" min="1" max="5" value={value.value} readOnly />
      <Char>
        <div>{description[0]}</div>
        <div>{description[1]}</div>
      </Char>
    </div>
  );
}

ProductBreakdownEntry.propTypes = {
  char: PropTypes.string,
  // eslint-disable-next-line react/forbid-prop-types
  value: PropTypes.objectOf(PropTypes.any),
  description: PropTypes.arrayOf(PropTypes.string),
};

ProductBreakdownEntry.defaultProps = {
  char: '',
  value: {},
  description: [],
};

export default ProductBreakdownEntry;
