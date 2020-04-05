import React, { Component } from "react";
import axios from "axios";
import App from "../App";
import ReactDOM from "react-dom";

const baseUrl = "http://www.omdbapi.com/?apikey=8e13383";

export class ResultDetails extends Component {
  state = {
    item: {
      title: "",
      year: "",
      director: "",
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
    return (
      <div>
        <img src="" alt="" />
        <h4>{this.state.item.director}</h4>
        <h3>{this.state.item.title}</h3>
        <button className="back-to-app-button" onClick={this.backToApp}>
          Close
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
          item: { title: data.Title, year: data.Year, director: data.Director },
        };
      });
    });
  };
}

export default ResultDetails;
