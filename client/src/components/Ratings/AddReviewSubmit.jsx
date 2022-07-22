import React from 'react';
import styled from 'styled-components';
import { AddReviewHeader } from './styles';

export const Button = styled.button`
  padding: 0.5em 0.5em;
  font-size: 1em;
  background: white;
`;

/*
  const [rating, setRating] = useState(0);
  const [recommend, setRecommend] = useState(null);
  const [characteristics, setCharacteristics] = useState({});
  const [body, setBody] = useState('');
  const [summary, setSummary] = useState('');
  const [photos, setPhotos] = useState([]);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
*/
function AddReviewSubmit({
  recommend, summary, body, name, email, setWarning
}) {
  function validateInput() {
    if (recommend === null || !summary || !body || body.length < 50 || !name || !email) {
      setWarning('You must enter the following');
    } else {
      setWarning('You are all set');
    }
  }
  return (
    <Button type="button" onClick={() => validateInput()}>
      Submit
      {/* {console.log('BUTTON summary = ', summary)} */}
      {/* {console.log('BUTTON recommend = ', recommend)} */}
      {/* {console.log('BUTTON body = ', body)} */}
      {/* {console.log('BUTTON email = ', email)} */}
    </Button>
  );
}

export default AddReviewSubmit;
