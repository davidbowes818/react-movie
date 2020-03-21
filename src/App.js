import React, { useState } from 'react';
import Search from './components/Search';
import Results from './components/Results';
import Popup from './components/Popup';
import axios from 'axios';

require('dotenv').config();

function App() {
  const [state, setState] = useState({
    s: '',
    results: [],
    selected: {}
  });

  const apiurl = process.env.REACT_APP_API_KEY;

  const search = e => {
    if (e.key === 'Enter') {
      axios(apiurl + '&s=' + state.s)
        .then(({ data }) => {
          let results = data.Search;

          setState(prevState => {
            return { ...prevState, results };
          });

          console.log(results);
        })
        .catch(err => console.log(err));
    }
  };

  const handleInput = e => {
    let s = e.target.value;

    setState(prevState => {
      return { ...prevState, s };
    });

    console.log(state.s);
  };

  const openPopup = id => {
    axios(apiurl + '&i=' + id)
      .then(({ data }) => {
        let result = data;

        setState(prevState => {
          return { ...prevState, selected: result };
        });
      })
      .catch(err => console.log(err));
  };

  const closePopup = () => {
    setState(prevState => {
      return { ...prevState, selected: {} };
    });
  };

  return (
    <div className="App">
      <header>
        <h1>Movie Database</h1>
      </header>
      <main>
        <div className="container">
          <Search handleInput={handleInput} search={search} />
          <Results results={state.results} openPopup={openPopup} />

          {typeof state.selected.Title != 'undefined' ? (
            <Popup selected={state.selected} closePopup={closePopup} />
          ) : (
            false
          )}
        </div>
      </main>
    </div>
  );
}

export default App;
