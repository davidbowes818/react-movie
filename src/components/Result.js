import React from 'react';

const Result = ({ result }) => {
  return (
    <div className="result">
      <img src={result.Poster} alt="poster-img" />
      <h3>{result.Title}</h3>
    </div>
  );
};

export default Result;
