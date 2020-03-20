import React from 'react';
import Search from './components/Search';

require('dotenv').config();

const apiurl = process.env.REACT_APP_API_KEY;

function App() {
  return (
    <div className="App">
      <header>
        <h1>Movie Database</h1>
      </header>
      <main>
        <Search />
      </main>
    </div>
  );
}

export default App;
