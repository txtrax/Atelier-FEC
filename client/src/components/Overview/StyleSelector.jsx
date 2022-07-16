import React from 'react';
import styled from 'styled-components';
import StyleThumbnail from './StyleThumbnail';

// make this into 4 columns
const StylesContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
`;

export default function StyleSelector(props) {
  const { styles } = props;

  return (
    <StylesContainer>

      {styles.map((style) => <StyleThumbnail style={style} key={style.style_id} />)}

    </StylesContainer>
  );
}
