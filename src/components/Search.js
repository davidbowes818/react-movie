import React from 'react';

const Search = ({ handleInput, search }) => {
  return (
    <section className="searchbox-wrap">
      <input
        type="text"
        placeholder="Search for a movie..."
        className="search-box"
        onChange={handleInput}
        onKeyPress={search}
      />
    </section>
  );
};

export default Search;
