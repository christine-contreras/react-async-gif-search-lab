import React, { Component } from 'react'

export class GifSearch extends Component {
    state = {
        query: ""
    }

    handleChange = (event) => {
        this.setState({
            query: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.props.fetchAPI(this.state.query)
    }
    
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                         <label htmlFor="search">Search Gifs</label>
                        <input class="form-control" id="search" placeholder="ex: dogs" name="query" type="text" value={this.state.query} onChange={this.handleChange} />
                    </div>
                 <button type="submit" className="btn btn-info">See Gifs</button>
                </form>
            </div>
        )
    }
}

export default GifSearch
