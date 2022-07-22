import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import axios from 'axios';
// const cloudinary = require('./services/cloudinary');

export const Button = styled.button`
  padding: 0.5em 0.5em;
  font-size: 1em;
  background: white;
  border-color: #BF8B85;
`;

function AddReviewSubmit({
  productId, product, displayRating, recommend, characteristics,
  summary, body, previewPhoto, name, email, setWarning,
}) {
  // const [photoURLs, setPhotoURLs] = useState('');
  function verifyEmail(emailInput) {
    const characterTest = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return characterTest.test(emailInput);
  }
  const validation = [];
  function validateInput() {
    if (!displayRating) {
      validation.push('Rating');
    }
    if (recommend === null) {
      validation.push('Recommendation');
    }
    if (!characteristics || Object.keys(characteristics).length < Object.keys(product).length) {
      validation.push('Characteristics');
    }
    if (!body || body.length < 50) {
      validation.push('Review Body');
    }
    if (!name) {
      validation.push('Nickname');
    }
    if (!email || !verifyEmail(email)) {
      validation.push('Email');
    }
    if (validation.length !== 0) {
      const warning = validation.join(', ');
      setWarning(`Please double check the following: ${warning}`);
    } else {
      setWarning('You are all set');
      // console.log('json obj = ', obj);
      // upload photos to cloudinary -> update photos
      // const uploadImage = (base64EncodedImage) => {
      //   axios.post('/api/upload', { data: base64EncodedImage })
      //     .then((response) => setPhotoURLs((prev) => [...prev, response.data]))
      //     .catch((err) => console.error('upload photos failed err = ', err));
      // };

      axios.post('reviews', {
        product_id: productId,
        rating: displayRating,
        recommend,
        characteristics,
        summary,
        body,
        name,
        email,
        photos: previewPhoto,
      })
        .then(() => {
          // console.log('POST sucess!');
        })
        .catch((err) => {
          console.log('POST review failed!, err = ', err);
        });
    }
  }
  return (
    <div>
      <Button type="button" onClick={() => validateInput()}>
        Submit
      </Button>
    </div>
  );
}

/*
  const [rating, setRating] = useState(0);
  const [recommend, setRecommend] = useState(null);
  const [characteristics, setCharacteristics] = useState({});
  const [body, setBody] = useState('');
  const [summary, setSummary] = useState('');
  const [previewPhoto, setPreviewPhoto] = useState([]);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

*/

AddReviewSubmit.propTypes = {
  product: PropTypes.objectOf(PropTypes.oneOfType([PropTypes.any])),
  productId: PropTypes.number,
  displayRating: PropTypes.number,
  recommend: PropTypes.bool,
  characteristics: PropTypes.objectOf(PropTypes.oneOfType([PropTypes.any])),
  summary: PropTypes.string,
  body: PropTypes.string,
  previewPhoto: PropTypes.arrayOf(PropTypes.string),
  name: PropTypes.string,
  email: PropTypes.string,
  setWarning: PropTypes.func,
};

AddReviewSubmit.defaultProps = {
  product: {},
  productId: 0,
  displayRating: 0,
  recommend: null,
  characteristics: {},
  summary: '',
  body: '',
  previewPhoto: [],
  name: '',
  email: '',
  setWarning: (e) => e,
};

export default AddReviewSubmit;
