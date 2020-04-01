import React, { Component } from 'react'
import Result from './Result';

class Results extends Component{

    render(){

        if(this.props.results == undefined){
            return <h4>No results found!</h4>
        }
    

        return <section className="results">
            {this.props.results.map(result => (
                <Result key={result.imdbID} result = {result}/>
            ))}
        </section>
    }

}

export default Results;