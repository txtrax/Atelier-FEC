/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { AddReviewHeader } from './styles';

const Button = styled.input`
  cursor: pointer;
`;
const Answer = styled.div`
  padding-bottom: 1em;
`;
// const RadioButton = styled.span`
//   top: 0;
//   left: 0;
//   height: 25px;
//   width: 25px;
//   background-color: #eee;
//   border-radius: 50%;
//   :hover {
//     background-color: #ccc;
//   }
// `;

function AddReviewRecommend({ setRecommend }) {
  function updateRecommend(e) {
    // console.log('IN RECOMMEND', e.target.value);
    if (e.target.value === 'no') {
      setRecommend(false);
    } else {
      setRecommend(true);
    }
  }
  return (
    <>
      <AddReviewHeader>
        Do you recommend this product?&#42;
      </AddReviewHeader>
      <Answer>
        <label htmlFor="Yes">
          <Button name="recommend" type="radio" value="yes" onClick={(e) => updateRecommend(e)} />
          Yes
        </label>
        <label htmlFor="No">
          <Button name="recommend" type="radio" value="no" onClick={(e) => updateRecommend(e)} />
          No
        </label>
      </Answer>
    </>
  );
}

AddReviewRecommend.propTypes = {
  setRecommend: PropTypes.func,
};

AddReviewRecommend.defaultProps = {
  setRecommend: (e) => e,
};

export default AddReviewRecommend;
