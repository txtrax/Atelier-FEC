import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { AddReviewHeader } from './styles';

const Container = styled.div`
  padding-bottom: 1em;
`;

const Button = styled.input`
  padding-left: 0.5em;
  font-size: 1em;
  background-color: white;
`;
const Thumbnail = styled.div`
  display: flex;
  width: 100%;
  gap: 10px;
  margin-top: 1em;
`;

const Images = styled.img`
  width: 60px;
  height: 80px;
  object-fit: cover;
  background: #BF8B85;
  border: 2px solid #BF8B85;
  border-radius: 2px;
`;

function AddReviewPhotos({ previewPhoto, setPreviewPhoto }) {
  // fileInput is an object of
  // const [fileInput, setFileInput] = useState('');

  function previewFile(file) {
    const reader = new FileReader();
    if (file) {
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        setPreviewPhoto((pre) => [...pre, reader.result]);
      };
    }
  }

  function handleFileInputChange(e) {
    const inputFiles = e.target.files;
    // console.log('In AddPhoto, file = ', inputFiles);
    Object.keys(inputFiles).map((key) => previewFile(inputFiles[key]));
  }

  return (
    <Container>
      <AddReviewHeader>Upload your photos</AddReviewHeader>
      <form>
        <Button
          type="file"
          name="upload"
          accept="image/*"
          // eslint-disable-next-line react/jsx-no-bind
          onChange={handleFileInputChange}
          multiple
        />
      </form>
      <Thumbnail>
        {previewPhoto
        && previewPhoto.map((preview, index) => (
          <Images
            src={preview}
            alt="Preview"
            height="100px"
            // eslint-disable-next-line react/no-array-index-key
            key={index}
          />
        ))}
      </Thumbnail>

    </Container>
  );
}

AddReviewPhotos.propTypes = {
  setPreviewPhoto: PropTypes.func,
  previewPhoto: PropTypes.arrayOf(PropTypes.string),
};

AddReviewPhotos.defaultProps = {
  setPreviewPhoto: (e) => e,
  previewPhoto: [],
};

export default AddReviewPhotos;
