// just an example of styled-component, please delete me
import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  min-width: 200px;
  border: none;
  font-size: 18px;
  padding: 7px 10px;

  /* The resulting background color will be based on the bg props. */
`;

function Profile() {
  return (
    <div>
      <StyledButton>Button A</StyledButton>
    </div>
  );
}

export default Profile;
