import React, { Component } from "react";
import ReactDOM from "react-dom";
import ResultDetails from "./ResultDetails";

class Result extends Component {
  handleResultClick = () => {
    // Replace with new page
    ReactDOM.render(
      <React.StrictMode>
        <ResultDetails imdbID={this.props.result.imdbID} />
      </React.StrictMode>,
      document.getElementById("root")
    );
  };

  render() {
    var result = this.props.result;

    return (
      <div className="result" onClick={this.handleResultClick}>
        <img src={result.Poster} />
        <h3>{result.Title}</h3>
      </div>
    );
  }
}

export default Result;
