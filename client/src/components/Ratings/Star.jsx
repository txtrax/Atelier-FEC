import React from 'react';
import PropTypes from 'prop-types';
// import styled from 'styled-components';
import { RiStarSLine, RiStarSFill } from 'react-icons/ri';

function Star({ filled, onClick }) {
  if (filled) {
    return (<RiStarSFill onClick={onClick} />);
  }
  return (<RiStarSLine onClick={onClick} />);
}

Star.propTypes = {
  filled: PropTypes.bool,
  onClick: PropTypes.func,
};

Star.defaultProps = {
  onClick: (e) => e,
  filled: false,
};

export default Star;
