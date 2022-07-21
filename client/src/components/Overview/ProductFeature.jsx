import React from 'react';
import styled from 'styled-components';
import { PropTypes } from 'prop-types';

const FeaturesContainer = styled.li`
  padding: 1px;
`;

export default function ProductFeature(props) {
  const { pair } = props;

  return (
    <FeaturesContainer>
      {pair.feature}
      :
      {' '}
      {pair.value}
    </FeaturesContainer>
  );
}

ProductFeature.propTypes = {
  pair: PropTypes.shape({
    feature: PropTypes.string,
    value: PropTypes.string,
  }),
};

ProductFeature.defaultProps = {
  pair: {},
};
