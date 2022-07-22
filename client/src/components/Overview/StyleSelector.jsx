import React from 'react';
import styled from 'styled-components';
import StyleThumbnail from './StyleThumbnail';

const StylesContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  column-gap: 1rem;
  row-gap: 1rem;
`;

export default function StyleSelector(props) {
  const {
    styles, setSelectedStyle, setIndex, selectedStyle,
  } = props;

  return (
    <StylesContainer>

      {styles.map((style) => {
        return <StyleThumbnail
          style={style}
          key={style.style_id}
          selectedStyle={selectedStyle}
          setSelectedStyle={setSelectedStyle}
          setIndex={setIndex}
        />;
      })}

    </StylesContainer>
  );
}
