import React, { useState } from 'react';

function Search({ handleSearch, searchInput }) {
  const handleFocus = (event) => {
    event.preventDefault();
    const { target } = event;
    target.setSelectionRange(0, target.value.length);
  };
  return (
    <div>
      <form>
        <input
          className="qa-search-bar"
          placeholder="Type in your search"
          onChange={(event) => handleSearch(event.target.value)}
          onFocus={handleFocus}
        />
      </form>
    </div>
  );
}
export default Search;
