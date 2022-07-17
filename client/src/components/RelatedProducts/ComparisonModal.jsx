import React, { useContext } from 'react';
import styled from 'styled-components';
import { FaCheck } from 'react-icons/fa';
import { GrFormClose } from 'react-icons/gr';
import ModalContext from '../ModalContext';

const TableWrapper = styled.div`
  width: 20%;
  height: 20%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -150%);
  position: fixed;
  overflow: hidden;
  border-radius:15px;
  border:4px solid #457b9d;
  padding:20px;
  background-color: #a8dadc;
`;

const MainTable = styled.table`
  height: 100%;
  margin-left: auto;
  margin-right: auto;
`;

const CloseButton = styled(GrFormClose)`
  position: absolute;
  width: 25px;
  height: 25px;
  top: 10px;
  right: 10px;
  color: #e63946;
`;

const TableRow = styled.tr`
  padding: 20px;
`;

const TableHeader = styled.th`
  font-size: 15px;
  text-align: center;
  color: #1d3557;
`;

const Check = styled(FaCheck)`
  color: #43aa8b;
`;

const dummyData = ['Sole', 'Material', 'Stitching'];

function ComparisonModal() {
  const conditionHolder = true;
  const { setIsOpen } = useContext(ModalContext);
  return (
    <TableWrapper>
      <MainTable>
        <CloseButton onClick={() => { setIsOpen(false); }} />
        <thead>
          <TableRow>
            <TableHeader>Item</TableHeader>
            <TableHeader aria-label="Characteristic" />
            <TableHeader>Related Item</TableHeader>
          </TableRow>
        </thead>
        <tbody style={{ textAlign: 'center' }}>
          {
            dummyData.map((characteristic, index) => (
              // eslint-disable-next-line react/no-array-index-key
              <TableRow key={index}>
                <td>{conditionHolder ? <Check /> : ''}</td>
                <td>characteristic</td>
                <td>{conditionHolder ? <Check /> : ''}</td>
              </TableRow>
            ))
          }
        </tbody>
      </MainTable>
    </TableWrapper>
  );
}

export default ComparisonModal;
