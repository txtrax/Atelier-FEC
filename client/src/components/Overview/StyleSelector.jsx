import React from 'react';
import styled from 'styled-components';
import StyleThumbnail from './StyleThumbnail';

const StylesContainer = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  column-gap: 1rem;
  row-gap: 1rem;
`;

export default function StyleSelector(props) {
  const { styles, setSelectedStyle, setIndex } = props;

  return (
    <StylesContainer>

      {styles.map((style) => <StyleThumbnail style={style} key={style.style_id} setSelectedStyle={setSelectedStyle} setIndex={setIndex} />)}

    </StylesContainer>
  );
}
