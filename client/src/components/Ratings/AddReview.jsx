import React from 'react';
import PropTypes from 'prop-types';
import { Button } from './styles';

function AddReview({ setShowModal }) {
  return (
    <div>
      <Button
        type="button"
        onClick={() => {
          document.documentElement.style.overflow = 'hidden';
          setShowModal(true);
        }}
      >
        ADD A REVIEW +
      </Button>
    </div>
  );
}

AddReview.propTypes = {
  setShowModal: PropTypes.func,
};

AddReview.defaultProps = {
  setShowModal: (e) => e,
};

export default AddReview;
