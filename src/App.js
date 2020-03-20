import React, { useState } from 'react';
import Search from './components/Search';
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
  return (
    <div className="App">
      <header>
        <h1>Movie Database</h1>
      </header>
      <main>
        <Search handleInput={handleInput} search={search} />
      </main>
    </div>
  );
}

export default App;
