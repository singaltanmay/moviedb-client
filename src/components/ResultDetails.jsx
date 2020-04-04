import React, { Component } from 'react'
import ResultItem from '../model/ResultItem'

export class ResultDetails extends Component {

    state = {
        item : new ResultItem(
            "Batman Begins",
            "2005",
            "Christopher Nolan"
        )
    }

    render() {
        return (
            <div>
                <img src="" alt=""/>
                <h4>{this.props.imdbID}</h4>
                <h3>{this.state.item.title}</h3>
            </div>
        )
    }
}

export default ResultDetails
