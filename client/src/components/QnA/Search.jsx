import React, { useState } from 'react';
import styled from 'styled-components';

const SearchBarContainer = styled.input`
  width: 100%;
  box-sizing: border-box;
  border-bottom: 1px solid #ccc;
  font-size: 16px;
  margin: 10px;
  background-color: none;
  background-position: 10px 10px;
  background-repeat: no-repeat;
  padding: 12px 20px 12px 40px;
  outline: none;
`;
function Search({ handleSearch, searchInput }) {
  const handleFocus = (event) => {
    event.preventDefault();
    const { target } = event;
    target.setSelectionRange(0, target.value.length);
  };
  return (
    <div>
      <form>
        <SearchBarContainer
          className="qa-search-bar"
          placeholder="HAVE A QUESTION? SEARCH FOR ANSWERS..."
          onChange={(event) => handleSearch(event.target.value)}
          onFocus={handleFocus}
        />
      </form>
    </div>
  );
}
export default Search;
