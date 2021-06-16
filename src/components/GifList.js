import React, { Component } from 'react'

export class GifList extends Component {

    renderListItems = () => {
        return this.props.gifs.map(gif => <li><img src={gif}/></li>)
    }
    render() {
        return (
            <ul>
                {this.renderListItems()}
            </ul>
        )
    }
}

export default GifList
