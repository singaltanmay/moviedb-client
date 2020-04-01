import React, {useState} from "react";
import Search from "./components/Search";

function App() {

  const [state, setState] = useState({
    s : "",
    results: [],
    selected:{}
  })

  const apiKey = "8e13383"
  
  const handleInput = (e) => {
    let s = e.target.value

    setState(prevState => {
      return {...prevState, s : s}
    })

    console.log(state.s)

  }

  return (
    <div className="App">
      <header>
        <h1>Movie Database</h1>
      </header>
      <main>
        <Search  handleInput={handleInput}/>
      </main>
    </div>
  );
}

export default App;
