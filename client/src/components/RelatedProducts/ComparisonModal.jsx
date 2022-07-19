import React, { useContext, useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { FaCheck } from 'react-icons/fa';
import { AiFillCloseCircle } from 'react-icons/ai';
import IdContext from '../Context';
import ModalContext from '../ModalContext';

const TableWrapper = styled.div`
  width: 50%;
  height: 30%;
  top: auto;
  left: 50%;
  transform: translate(-50%, -100%);
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

const CloseButton = styled(AiFillCloseCircle)`
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

function ComparisonModal() {
  const conditionHolder = true;
  const { setIsOpen } = useContext(ModalContext);
  const { productId } = useContext(IdContext);
  const { relatedId } = useContext(ModalContext);
  const [comparedFeatures, setComparedFeatures] = useState([]);
  const [comparedItemsName, setComparedItemsName] = useState([]);

  function getProductFeature(id) {
    return axios.get(`/products/${id}`);
  }

  const allFeatures = [];
  const itemsName = [];

  function saveComparedItems() {
    Promise.all([getProductFeature(productId), getProductFeature(relatedId)])
      .then((result) => {
        const compare = {};
        compare.currentItem = result[0].data;
        compare.relatedItem = result[1].data;
        compare.currentItem.features.forEach((x) => allFeatures.push(x.feature));
        compare.relatedItem.features.forEach((x) => allFeatures.push(x.feature));
        itemsName.push(compare.currentItem.name);
        itemsName.push(compare.relatedItem.name);
        const noDupAllFeatures = Array.from(new Set(allFeatures));
        setComparedFeatures([...noDupAllFeatures]);
        setComparedItemsName([...itemsName]);
      })
      .catch((err) => {
        console.error('Error when retrieving comparison data: ', err);
      });
  }

  console.log('state:', comparedFeatures, comparedItemsName);

  useEffect(() => {
    saveComparedItems();
  }, []);

  return (
    <TableWrapper>
      <MainTable>
        <CloseButton onClick={() => { setIsOpen(false); }} />
        <thead>
          <TableRow>
            <TableHeader>{comparedItemsName[0]}</TableHeader>
            <TableHeader aria-label="Characteristic" />
            <TableHeader>{comparedItemsName[1]}</TableHeader>
          </TableRow>
        </thead>
        <tbody style={{ textAlign: 'center' }}>
          {
            comparedFeatures.map((characteristic, index) => (
              // eslint-disable-next-line react/no-array-index-key
              <TableRow key={index}>
                <td>{conditionHolder ? <Check /> : ''}</td>
                <td>{characteristic}</td>
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
