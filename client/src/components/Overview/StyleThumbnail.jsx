import React from 'react';
// import styled from 'styled-components';

// const StyledThumbnail = styled(image)`
// height: 2em;
// width: 2em;
// position: block;
// right: 0;
// border-radius: 50%;
// `;

export default function StyleThumbnail(props) {
  const { style } = props;

  // const image = <img height="60" width="auto" border-radius="50%" src={style.photos[0].thumbnail_url} />

  return (
    <img style={{height:60, width:"auto", borderRadius:30}} src={style.photos[0].thumbnail_url} />
  );
}
