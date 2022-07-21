import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { RiStarSLine, RiStarSFill } from 'react-icons/ri';

const UnfilledStar = styled(RiStarSFill)`
  width: 20px;
  height: 20px;
  border: 2px;
  color: #dabeca
`;
const FilledStar = styled(UnfilledStar)`
  color: #5d5f71
`;
function Star({ filled, onClick }) {
  if (filled) {
    return (<FilledStar onClick={onClick} />);
  }
  return (<UnfilledStar onClick={onClick} />);
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
