import React from 'react';

const Popup = ({ selected, closePopup }) => {
  return (
    <section className="popup">
      <div className="content">
        <h2>
          {selected.Title} <span>({selected.Year})</span>
        </h2>
        <p className="rating">Rating: {selected.imdbRating}</p>
        <div className="plot">
          <img src={selected.Poster} alt="poster" />
          <p>{selected.Plot}</p>
        </div>
        <div className="btn-wrap">
          <button className="close" onClick={closePopup}>
            Close
          </button>
        </div>
      </div>
    </section>
  );
};

export default Popup;
