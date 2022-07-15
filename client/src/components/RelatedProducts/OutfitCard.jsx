import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
  width: 260px;
  height: 380px;
  color: #1d3557;
  background: #f1faee;
  border: 3px solid #1d3557;
  display: inline-block;
  margin-left: 5px;
  margin-right: 5px;
`;

function OutfitCard() {
  return (
    <Card>
      O-CARD
    </Card>

  );
}

export default OutfitCard;
