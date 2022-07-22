import React from 'react';
import styled from 'styled-components';
import { PropTypes } from 'prop-types';
import ProductDescription from './ProductDescription';
import ProductFeatureList from './ProductFeatureList';

const DescriptionAndFeatures = styled.div`
  margin: 20px;
  padding: 20px 20px 30px 20px;
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  color: #5D5F71;
  border: 3px;
  border-radius: 15px;
  font-size: 1em;
`;

export default function OverviewDescription(props) {
  const { overview } = props;

  return (
    <DescriptionAndFeatures>
      <ProductDescription
        slogan={overview.slogan}
        description={overview.description}
      />
      <hr />
      <ProductFeatureList
        features={overview.features}
      />
    </DescriptionAndFeatures>
  );
}

OverviewDescription.propTypes = {
  overview: PropTypes.shape({
    slogan: PropTypes.string,
    description: PropTypes.string,
    features: PropTypes.arrayOf(PropTypes.shape({
      feature: PropTypes.string,
      value: PropTypes.string,
    })),
  }),
};

OverviewDescription.defaultProps = {
  overview: {},
};
