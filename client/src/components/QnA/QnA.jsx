import React, { useState, useEffect, useContext } from 'react';
import styled from 'styled-components';
import propTypes from 'prop-types';
import axios from 'axios';
import IdContext from '../Context';
import QuestionsList from './QuestionsList';
import Search from './Search';
import AddQuestion from './AddQuestion';

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  font-family: 'Roboto', sans-serif;
`;

const SearchDiv = styled.div`
  display: flex;
  height: 3em;
`;

const SearchBar = styled.input`
  width: 100%;

`;
const AddButton = styled.button`
  margin-right: 1em;
  padding: 1em 1em;
  font-size: 1.2em;
  font-weight: bold;
  background: white;
`;

// const SearchBtn = styled.button`
//   width: 50px;
//   height: 50px;
//   border: 1px solid grey;
//   background:grey;
//   text-align: center;
//   color: black;
//   border-radius: 0 5px 5px 0;
//   cursor: pointer;
//   font-size: 20px;

//   &:hover {
//     background-color: lightgrey;
//     border: 1px solid black;
//   border-radius: 5px;
//   transition: all ease 0.3s;
//   }
// `;

const QuestionListContainer = styled.div`
  display: flex;
  flex-direction: column !important;
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row !important;
`;

const Header = styled.div`
  font-weight: bold;
  font-size: 1.2em;
  padding-bottom: 0.5em;
`;

function QnA() {
  // console.log(props, 'this is propssss');
  // super(props);
  // this.state = {
  //   searchInput: '',
  // };
  // const [questionsData, setQuestionsData] = useState([]);
  // const [filteredQuestions, setFilteredQuestions] = useState([]);
  const [searchInput, setSearchInput] = useState(null);

  // this id is for testing

  // const [productId, setProductId] = useState(40353);
  const [questions, setQuestions] = useState([]);
  const [displayQuestions, setDisplayQuestions] = useState([]);
  // const [itemToShow, setItemToShow] = useState(4);
  const [openModal, setOpenModal] = useState(false);
  const { productId, setProductId } = useContext(IdContext);
  // const { searchInput } = this.state;
  // const { productId } = props;

  useEffect(() => {
    axios.get(`/qa/questions?product_id=${productId}`)
      .then((response) => {
        setQuestions(response.data.results.sort((a, b) => a.helpfulness - b.helpfulness));
        // eslint-disable-next-line max-len
        setDisplayQuestions(response.data.results.slice(0, 4).sort((a, b) => a.helpfulness - b.helpfulness));
      })
      .catch((err) => {
        console.log('error getting data', err);
      });
  }, [productId]);
  const handleSearch = (searchInput) => {
    searchInput.length > 2 ? setSearchInput(searchInput) : setSearchInput('');
  };

  const handleModalOpen = () => {
    setOpenModal(true);
  };
  const handleModalClose = () => {
    setOpenModal(false);
  };

  return (
    <MainContainer>
      <Header>Questions and Answers</Header>
      <form onSubmit={(event) => { event.preventDefault(); }}>
        <SearchDiv classname="searchBar">
          {/* <SearchBar
              type="text"
              placeholder="Type in your question"
              value={searchInput}
              onChange={handleSearch}
            /> */}
          <Search
            handleSearch={handleSearch}
            searchInput={searchInput}
          />
          {/* <SearchBtn /> */}
        </SearchDiv>
      </form>
      <QuestionListContainer>
        {questions !== undefined && Object.keys(questions).length !== 0 ? (

          <QuestionsList
            productId={productId}
            questions={questions}
            searchInput={searchInput}
            displayQuestions={displayQuestions}
            setDisplayQuestions={setDisplayQuestions}
          />

        )

          : null}
      </QuestionListContainer>

      <ButtonContainer>

        <AddButton onClick={handleModalOpen}>
          Add a Question +
        </AddButton>

        <AddQuestion
          productId={productId}
          openModal={openModal}
          handleModalClose={handleModalClose}
        />

      </ButtonContainer>

    </MainContainer>
  );
}

QnA.propTypes = {
  productId: propTypes.number,
  setProductId: propTypes.func,
};

QnA.defaultProps = {
  productId: 40351,
  setProductId: (e) => e,
};

export default QnA;
