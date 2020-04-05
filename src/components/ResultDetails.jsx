import React, { Component } from 'react'
import ResultItem from '../model/ResultItem'

export class ResultDetails extends Component {

    state = {
        item = ResultItem(
            "Batman Begins",
            "2005",
            "Christopher Nolan"
        )
    }

    render() {
        return (
            <div>
                <img src="" alt=""/>
                <h3>{this.state.item.title}</h3>
            </div>
        )
    }
}

export default ResultDetails
