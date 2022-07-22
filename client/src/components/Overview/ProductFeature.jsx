import React from 'react';
import styled from 'styled-components';
import { PropTypes } from 'prop-types';

const FeatureContainer = styled.li`
  padding: 1px;
  font-size: 1.5em;
`;

export default function ProductFeature(props) {
  const { pair } = props;

  if (pair.value === null) {
    return (
      <FeatureContainer>
        {pair.feature}
      </FeatureContainer>
    );
  }

  return (
    <FeatureContainer>
      {pair.feature}
      :
      {' '}
      {pair.value}
    </FeatureContainer>
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
