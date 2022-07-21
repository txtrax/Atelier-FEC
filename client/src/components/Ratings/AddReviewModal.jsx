import React, { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { CgCloseO } from 'react-icons/cg';
import AddReviewOverall from './AddReviewOverall';
import AddReviewRecommend from './AddReviewRecommend';
import AddReviewChar from './AddReviewChar';
import AddReviewSummary from './AddReviewSummary';
import AddReviewBody from './AddReviewBody';
import AddReviewPhotos from './AddReviewPhotos';
import AddReviewNickname from './AddReviewNickname';
import AddReviewEmail from './AddReviewEmail';
import AddReviewSubmit from './AddReviewSubmit';

const Modal = styled.div`
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 60%;
  height: 70%;
  background: white;
  padding-left: 2em;
  padding-right: 2em;
  padding-top: 2em;
  padding-bottom: 2em;
  border: 3px solid black;
  border-radius: 15px;
  overflow: auto;
`;

// const Title = styled.div`
//   position: fixed;
// `;
// const Content = styled.div`
//   margin-top: 50px;
// `;

const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  width: 30px;
  height: 30px;
  background: transparent;
  padding: 0;
  border: 0;
`;

const CloseSymbol = styled(CgCloseO)`
  display:flex;
  align-items: center;
  align-content: center;
  width: 100%;
  height: 100%;
`;

const Header = styled.div`
  font-weight: bolder;
  font-size: 1.5em;
`;
const SubHeader = styled(Header)`
  font-size: 1.2em;
  font-style: italic;
  font-weight: normal;
  padding-bottom: 2em;
`;

const Warning = styled.div`
  font-style: italic;
  color: #00ff00;
  padding-bottom: 2em;
`;

function AddReviewModal({ productName, setShowModal, showModal }) {
  const [displayRating, setDisplayRating] = useState(0);
  const [recommend, setRecommend] = useState(null);
  const [characteristics, setCharacteristics] = useState({});
  const [body, setBody] = useState('');
  const [summary, setSummary] = useState('');
  const [photos, setPhotos] = useState([]);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [warning, setWarning] = useState('');
  const [rating, setRating] = useState(0);

  if (showModal) {
    // console.log('In AddReviewModal');
    return (
      <Modal>
        <div>
          <CloseButton
            type="button"
            onClick={() => setShowModal(false)}
          >
            <CloseSymbol />
          </CloseButton>
          <Header>Write Your Review</Header>
          <SubHeader>{`About the ${productName}`}</SubHeader>
        </div>
        <Warning>
          {warning}
        </Warning>
        <div>
          <AddReviewOverall displayRating={displayRating} setDisplayRating={setDisplayRating} />
          <AddReviewRecommend setRecommend={setRecommend} />
          <AddReviewChar setCharacteristics={setCharacteristics} />
          <AddReviewSummary setSummary={setSummary} />
          <AddReviewBody setBody={setBody} />
          <AddReviewPhotos />
          <AddReviewNickname setName={setName} />
          <AddReviewEmail setEmail={setEmail} />
        </div>
        <AddReviewSubmit
          setWarning={setWarning}
          recommend={recommend}
          summary={summary}
          body={body}
          name={name}
          email={email}
        />
      </Modal>
    );
  }
}

AddReviewModal.propTypes = {
  showModal: PropTypes.bool,
  setShowModal: PropTypes.func,
  productName: PropTypes.string,
};

AddReviewModal.defaultProps = {
  showModal: true,
  setShowModal: (e) => e,
  productName: '',
};

export default AddReviewModal;
