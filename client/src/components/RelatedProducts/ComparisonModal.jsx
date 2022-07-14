import React from 'react';
import styled from 'styled-components';

function ComparisonModal() {
  return (
    <TableWrapper>
      ComparisonModal
    </TableWrapper>
  );
}

const TableWrapper = styled.div`
  width: 50%;
  height: 30%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  position: fixed;
  border-radius:15px;
  border:4px solid #e63946;
  padding:20px;
  background-color: #a8dadc;
`;

export default ComparisonModal;
