import React from 'react';

export default function ProductFeature(props) {
  const { feature } = props;

  return (
    <div>
      {feature.feature} : {feature.value}
    </div>
  );
}
