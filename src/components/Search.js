import React from 'react';

const Search = () => {
  return (
    <section className="searchbox-wrap">
      <input
        type="text"
        placeholder="Search for a movie..."
        className="search-box"
      />
    </section>
  );
};

export default Search;