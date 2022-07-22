import React from 'react';
import styled from 'styled-components';
import { PropTypes } from 'prop-types';
import ProductFeature from './ProductFeature';

const ProductFeatureContainer = styled.div`
  border: 2px;
  border-left-color: black;
  position: relative;
  display: flex;
  flex-direction: column;
  width: 25%;
`;

const FeaturesContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 16px 0px;
  padding-bottom: 16px;
`;

const FeaturesSlogan = styled.p`
  font-weight: bold;
  font-size: 2em;
`;

export default function ProductFeatureList(props) {
  const { features } = props;

  return (
    <ProductFeatureContainer>

      <FeaturesSlogan>
        Product Details
      </FeaturesSlogan>

      <FeaturesContainer>
        {features.map((pair) => <ProductFeature pair={pair} key={pair.feature} />)}
      </FeaturesContainer>

    </ProductFeatureContainer>
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
