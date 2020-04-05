import axios from "axios";
import React, { Component } from "react";
import ReactDOM from "react-dom";
import App from "../App";

const baseUrl = "http://www.omdbapi.com/?apikey=8e13383";

export class ResultDetails extends Component {
  state = {
    item: {
      imdbID: "",
      title: "",
      type: "",
      year: "",
      director: "",
      actors: "",
      genre: "",
      country: "",
      awards: "",
      language: "",
      plot: "",
      poster: "",
      released: "",
    },
  };

  backToApp = () => {
    ReactDOM.render(
      <React.StrictMode>
        <App />
      </React.StrictMode>,
      document.getElementById("root")
    );
  };

  render() {
    const item = this.state.item;
    return (
      <div>
        <span className="xmk-poster">
          <img src={item.poster} alt="poster" />
        </span>

        <div className="minInfoBar">
          <h3 className="xmk-title">{item.title}</h3>
        </div>

        <h4>{item.director}</h4>

        <button className="back-to-app-button" onClick={this.backToApp}>
          Home
        </button>
      </div>
    );
  }

  componentDidMount() {
    this.loadItemDetails(this.props.imdbID);
  }

  loadItemDetails = (imdbId) => {
    axios(baseUrl + "&i=" + imdbId).then(({ data }) => {
      console.log(data);
      this.setState((prevState) => {
        return {
          ...prevState,
          item: {
            title: data.Title,
            year: data.Year,
            director: data.Director,
            poster: data.Poster,
          },
        };
      });
    });
  };
}

export default ResultDetails;
