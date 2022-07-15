import React, { useState, useEffect, useContext } from 'react';
import styled from 'styled-components';
import propTypes from 'prop-types';
import axios from 'axios';
import IdContext from '../Context';
import QuestionsList from './QuestionsList';
import Search from './Search';
import AddQuestion from './AddQuestion';

const FlexContainer = styled.div`
display: flex;
justify-content: left;
`;

const Container = styled.div`
  border-radius: 10px;
  padding: 5px;
  margin: 5px;
  max-width: 1280px;
`;

const SearchDiv = styled.div`
  width: 60%;
  position: relative;
  display: flex;
`;

const SearchBar = styled.input`
  width: 100%;
  box-sizing: border-box;
  border: none;
  border-bottom: 1px solid #ccc;
  font-size: 16px;
  background-color: none;
  background-position: 10px 10px;
  background-repeat: no-repeat;
  padding: 12px 20px 12px 40px;
  outline: none;

`;

const SearchBtn = styled.button`
  width: 50px;
  height: 50px;
  border: 1px solid grey;
  background:grey;
  text-align: center;
  color: black;
  border-radius: 0 5px 5px 0;
  cursor: pointer;
  font-size: 20px;

  &:hover {
    background-color: lightgrey;
    border: 1px solid black;
  border-radius: 5px;
  transition: all ease 0.3s;
  }
`;

function QnA(props) {
  // console.log(props, 'this is propssss');
  // super(props);
  // this.state = {
  //   searchInput: '',
  // };
  // const [questionsData, setQuestionsData] = useState([]);
  // const [filteredQuestions, setFilteredQuestions] = useState([]);
  const [searchInput, setSearchInput] = useState('');

  // this id is for testing

  // const [productId, setProductId] = useState(40353);
  const [questions, setQuestions] = useState([]);
  const [displayQuestions, setDisplayQuestions] = useState(4);
  const [openModal, setOpenModal] = useState(false);
  // const { productId, setProductId } = useContext(IdContext);
  // const { searchInput } = this.state;
  // const { productId } = props;
  const { productId, setProductId } = useContext(IdContext);
  useEffect(() => {
    axios.get(`/qa/questions?product_id=${productId}`)
      .then((response) => {
        setQuestions(response.data.results);
        // console.log(response.data.results, 'this is questions');
      })
      .catch((err) => {
        console.log('error getting data', err);
      });
  }, [productId]);
  const handleSearch = (searchInput) => {
    searchInput.length > 2 ? setSearchInput(searchInput) : setSearchInput('');
  };

  // const questionRender = () => {
  //   axios.get(`qa/questions/?product_id=${productId}`)
  //     .then((response) => {
  //       setQuestions(response);
  //     });
  // };
  const handleModalOpen = () => {
    setOpenModal(true);
  };
  const handleModalClose = () => {
    setOpenModal(false);
  };

  return (
    <FlexContainer>
      <Container>
        <h1>Questions and Answers</h1>
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
            <SearchBtn />
          </SearchDiv>
        </form>
      </Container>
      <Container>
        <QuestionsList
          productId={productId}
          questions={questions}
        />
        <button onClick={handleModalOpen}>
          Add a Question
        </button>
        {/* <AddQuestion
          productId={productId}
          openModal={openModal}
          handleModalClose={handleModalClose}
        /> */}
      </Container>
    </FlexContainer>
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
