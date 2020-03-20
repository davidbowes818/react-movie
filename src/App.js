import React, { useState } from 'react';
import Search from './components/Search';

require('dotenv').config();

function App() {
  const [state, setState] = useState({
    s: '',
    results: [],
    selected: {}
  });

  const apiurl = process.env.REACT_APP_API_KEY;

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
        <Search handleInput={handleInput} />
      </main>
    </div>
  );
}

export default App;
