import React from 'react';
import styled from 'styled-components';

const DescriptionContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
`;

export default function ProductFeatures(props) {
  const { features } = props;
  console.log(features);

  if (features === undefined) {
    return <div>Noo can do</div>;
  }

  return (
    <DescriptionContainer>
      {features.map((feature) => {
        return (
          <div>
            {feature.feature} : {feature.value}
          </div>
        )
      })}
    </DescriptionContainer>
  );
}
