import React, { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
// import { CgCloseO } from 'react-icons/cg';
import { AiFillCloseCircle } from 'react-icons/ai';
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
  display: flex;
  flex-direction: column;
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
  border: 3px solid  #BF8B85;
  border-radius: 15px;
`;
const CloseSymbol = styled(AiFillCloseCircle)`
  position: absolute;
  width: 25px;
  height: 25px;
  top: 10px;
  right: 10px;
  color: #BF8B85;
  cursor: pointer;
  opacity: 0.8;
  &:hover {
    opacity: 1;
  }
`;

const Title = styled.div`
`;
const Content = styled.div`
  overflow: auto;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  width: 40px;
  height: 40px;
  background: transparent;
  padding: 0;
  border: 0;
`;

// const CloseSymbol = styled(CgCloseO)`
//   display:flex;
//   align-items: center;
//   align-content: center;
//   width: 100%;
//   height: 100%;
//   color: #BF8B85;
// `;

const Header = styled.div`
  font-weight: bolder;
  font-size: 1.5em;
`;
const SubHeader = styled(Header)`
  font-size: 1.2em;
  font-style: italic;
  font-weight: normal;
  padding-bottom: 1em;
`;

const Warning = styled.div`
  font-style: italic;
  color: #A11A2E;
  padding-bottom: 1em;
`;

function AddReviewModal({
  productId, productName, setShowModal, showModal, product,
}) {
  const [displayRating, setDisplayRating] = useState(0);
  const [recommend, setRecommend] = useState(null);
  const [characteristics, setCharacteristics] = useState({});
  const [body, setBody] = useState('');
  const [summary, setSummary] = useState('');
  const [previewPhoto, setPreviewPhoto] = useState([]);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [warning, setWarning] = useState('');

  if (showModal) {
    // console.log('In AddReviewModal');
    return (
      <Modal>
        <Title>
          <CloseButton
            type="button"
            onClick={() => {
              document.documentElement.style.overflow = 'auto';
              setShowModal(false);
            }}
          >
            <CloseSymbol />
          </CloseButton>
          <Header>Write Your Review</Header>
          <SubHeader>{`About the ${productName}`}</SubHeader>
          <Warning>
            {warning}
          </Warning>
        </Title>
        <Content>
          <AddReviewOverall displayRating={displayRating} setDisplayRating={setDisplayRating} />
          <AddReviewRecommend setRecommend={setRecommend} />
          <AddReviewChar
            product={product}
            setCharacteristics={setCharacteristics}
            characteristics={characteristics}
          />
          <AddReviewSummary setSummary={setSummary} />
          <AddReviewBody setBody={setBody} />
          <AddReviewPhotos previewPhoto={previewPhoto} setPreviewPhoto={setPreviewPhoto} />
          <AddReviewNickname setName={setName} />
          <AddReviewEmail setEmail={setEmail} />
          <AddReviewSubmit
            productId={productId}
            product={product}
            setWarning={setWarning}
            displayRating={displayRating}
            recommend={recommend}
            characteristics={characteristics}
            summary={summary}
            body={body}
            previewPhoto={previewPhoto}
            name={name}
            email={email}
          />
        </Content>
      </Modal>
    );
  }
}

AddReviewModal.propTypes = {
  productId: PropTypes.number,
  product: PropTypes.objectOf(PropTypes.oneOfType([PropTypes.any])),
  showModal: PropTypes.bool,
  setShowModal: PropTypes.func,
  productName: PropTypes.string,
};

AddReviewModal.defaultProps = {
  productId: 0,
  product: {},
  showModal: true,
  setShowModal: (e) => e,
  productName: '',
};

export default AddReviewModal;
