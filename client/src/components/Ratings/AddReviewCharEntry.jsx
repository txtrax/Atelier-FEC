import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Container = styled.div`
  display: flex;
  align-items: center;
`;

// const BoldContainer = styled(Container)`
//   font-color: lightgrey;
// `;

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

/*
<Button name="recommend" type="radio" value="yes" onClick={(e) => updateRecommend(e)} />
*/

function AddReviewCharEntry({
  product, char, description, characteristics, setCharacteristics,
}) {
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
  const handleClick = (e) => {
    // console.log('name', e.target.name);
    // console.log('value', e.target.value);
    const temp = { ...characteristics };
    temp[product[e.target.name].id] = Number.parseInt(e.target.value, 10);
    // console.log('temp = ', temp);
    setCharacteristics(temp);
  };
  return (
    <Container>
      <Characteristics>
        {char}
      </Characteristics>
      <Descriptions>
        {description.map((des, index) => (
          <SingleDes key={des}>
            <input type="radio" name={char} value={index + 1} onClick={(e) => (handleClick(e))} />
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
  product: PropTypes.objectOf(PropTypes.oneOfType([PropTypes.any])),
  setCharacteristics: PropTypes.func,
  characteristics: PropTypes.objectOf(PropTypes.oneOfType([PropTypes.any])),
};

AddReviewCharEntry.defaultProps = {
  char: '',
  description: '',
  product: {},
  setCharacteristics: (e) => e,
  characteristics: {},
};

export default AddReviewCharEntry;
