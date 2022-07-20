import React from 'react';
import styled from 'styled-components';
import { PropTypes } from 'prop-types';
import ProductFeature from './ProductFeature';

const DescriptionContainer = styled.div`
  border: 2px;
  border-left-color: black;
  position: relative;
  display: flex;
  flex-direction: column;
`;

const FeaturesSlogan = styled.p`
  padding-bottom: 2px;
`;

export default function ProductFeatureList(props) {
  const { features } = props;

  return (
    <DescriptionContainer>

      <FeaturesSlogan>
        <b>Product Details</b>
      </FeaturesSlogan>

      {features.map((feature) => <ProductFeature feature={feature} key={feature.feature} />)}

    </DescriptionContainer>
  );
}

ProductFeatureList.propTypes = {
  features: PropTypes.arrayOf(PropTypes.shape({
    feature: PropTypes.string,
    value: PropTypes.string,
  })),
};

ProductFeatureList.defaultProps = {
  features: [],
};
