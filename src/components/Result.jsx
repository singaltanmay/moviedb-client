import React, { Component } from 'react'

class Result extends Component{

    render(){

        var result = this.props.result;

        return <div className="result">
            <img src={result.Poster}/>
            <h3>{result.Title}</h3>
        </div>
    }


}

export default Result;