import React, { useContext, useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { FaCheck } from 'react-icons/fa';
import { AiFillCloseCircle } from 'react-icons/ai';
import IdContext from '../Context';
import ModalContext from '../ModalContext';

const TableWrapper = styled.div`
  width: 30%;
  height: 30%;
  top: auto;
  left: 50%;
  z-index: 10;
  transform: translate(-50%, -100%);
  position: fixed;
  overflow: hidden;
  border-radius: 15px;
  border: 4px solid #DABECA;
  padding: 20px;
  background-color: #5D5F71;
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
  color: #DABECA;
`;

const TableRow = styled.tr`
  padding: 20px;
  color: #DABECA;
`;

const TableHeader = styled.th`
  font-size: 20px;
  text-align: center;
  color: #DABECA;
`;

const Check = styled(FaCheck)`
  color: #DABECA;
`;

function ComparisonModal() {
  const { setIsOpen } = useContext(ModalContext);
  const { productId } = useContext(IdContext);
  const { relatedId } = useContext(ModalContext);
  const [comparedFeatures, setComparedFeatures] = useState([]);
  const [comparedItemsName, setComparedItemsName] = useState([]);
  const [currFeatures, setCurrFeatures] = useState([]);
  const [relatedFeatures, setRelatedFeatures] = useState([]);

  function getProductFeature(id) {
    return axios.get(`/products/${id}`);
  }

  const currentItemFeatures = [];
  const relatedItemFeatures = [];
  let allFeatures = [];
  let itemsName = [];

  function saveComparedItems() {
    Promise.all([getProductFeature(productId), getProductFeature(relatedId)])
      .then((result) => {
        const compare = {};
        compare.currentItem = result[0].data;
        compare.relatedItem = result[1].data;
        compare.currentItem.features.forEach((x) => currentItemFeatures.push(x.feature));
        compare.relatedItem.features.forEach((x) => relatedItemFeatures.push(x.feature));
        allFeatures = [...currentItemFeatures, ...relatedItemFeatures];
        itemsName = [compare.currentItem.name, compare.relatedItem.name];
        const noDupAllFeatures = Array.from(new Set(allFeatures));
        setComparedFeatures([...noDupAllFeatures]);
        setComparedItemsName([...itemsName]);
        setCurrFeatures([...currentItemFeatures]);
        setRelatedFeatures([...relatedItemFeatures]);
      })
      .catch((err) => {
        console.error('Error when retrieving comparison data: ', err);
      });
  }

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
                <td>{currFeatures.some((x) => x === characteristic) ? <Check /> : ''}</td>
                <td>{characteristic}</td>
                <td>{relatedFeatures.some((x) => x === characteristic) ? <Check /> : ''}</td>
              </TableRow>
            ))
          }
        </tbody>
      </MainTable>
    </TableWrapper>
  );
}

export default ComparisonModal;
