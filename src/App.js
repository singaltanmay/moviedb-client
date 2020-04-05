import React, { useState } from "react";
import Search from "./components/Search";
import axios from "axios";
import Results from "./components/Results";

function App() {
  const [state, setState] = useState({
    s: "",
    results: [],
    selected: {},
  });

  const baseUrl = "http://www.omdbapi.com/?apikey=8e13383";

  const handleSearch = (e) => {
    if (e.key === "Enter") {
      axios(baseUrl + "&s=" + state.s).then(({ data }) => {
        let results = data.Search;
        setState((prevState) => {
          return { ...prevState, results: results };
        });
      });
    }
  };

  const handleInput = (e) => {
    let s = e.target.value;
    setState((prevState) => {
      return { ...prevState, s: s };
    });
  };

  return (
    <div className="App">
      <header>
        <h1>Movie Database</h1>
      </header>
      <main>
        <Search handleInput={handleInput} handleSearch={handleSearch} />
        <Results results={state.results} />
      </main>
    </div>
  );
}

export default App;
