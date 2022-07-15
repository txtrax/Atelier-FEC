import React from 'react';
import styled from 'styled-components';
import StyleThumbnail from './StyleThumbnail';

const StylesContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

export default function StyleSelector(props) {
  const { styles } = props;
  console.log(styles);

  return (
    <StylesContainer>
      <div><b>STYLE > </b>{styles[0].name.toUpperCase()}</div>
      <StyleThumbnail />
    </StylesContainer>

  );
}
