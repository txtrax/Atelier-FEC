import React from 'react';
import styled from 'styled-components';
import { PropTypes } from 'prop-types';

const FeaturesContainer = styled.li`
  padding: 1px;
`;

export default function ProductFeature(props) {
  const { feature } = props;

  return (
    <FeaturesContainer>
      {feature.feature}
      :
      {' '}
      {feature.value}
    </FeaturesContainer>
  );
}

ProductFeature.propTypes = {
  feature: PropTypes.shape({
    feature: PropTypes.string,
    value: PropTypes.string,
  }),
};

ProductFeature.defaultProps = {
  feature: {},
};
