import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Container = styled.div`
  display: flex;
  align-items: center;
`;

const BoldContainer = styled(Container)`
  font-color: lightgrey;
`;

const Characteristics = styled.div`
  // font-weight: bolder;
  font-color: inherit;
  font-size: 1em;
  padding-bottom: 0.5em;
  width: 9%;
`;

const Descriptions = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 1em;
  width: 91%;
`;

const SingleDes = styled.div`
  display: flex;
  flex-direction: column;
  align-items:center;
  width: 20%;
  font-size: 0.8em;
  // justify-content: flex-start;
`;

function AddReviewCharEntry({ char, description,index, setCharacteristics }) {
  // if (index % 2 === 0) {
  //   return (
  //     <BoldContainer>
  //       <Characteristics>
  //         {char}
  //       </Characteristics>
  //       <Descriptions>
  //         {description.map((des) => (
  //           <SingleDes  key={des}>
  //             <input type="radio" />
  //             <div>{des}</div>
  //           </SingleDes>
  //         ))}
  //       </Descriptions>
  //     </BoldContainer>
  //   );
  // }
  return (
    <Container>
      <Characteristics>
        {char}
      </Characteristics>
      <Descriptions>
        {description.map((des) => (
          <SingleDes key={des}>
            <input type="radio" name={char} />
            <div>{des}</div>
          </SingleDes>
        ))}
      </Descriptions>
    </Container>
  );
}

AddReviewCharEntry.propTypes = {
  char: PropTypes.string,
  description: PropTypes.arrayOf(PropTypes.string),
  index: PropTypes.number,
  setCharacteristics: PropTypes.objectOf(PropTypes.number),
};

AddReviewCharEntry.defaultProps = {
  char: '',
  description: '',
  index: 0,
  setCharacteristics: {},
};

export default AddReviewCharEntry;
