import React, { Component } from 'react'
import GiftList from '../components/GifList'
import GifSearch from '../components/GifSearch'

export class GifListContainer extends Component {

    constructor() {
        super()
        this.state = {
            gifList: []
        }
    }

    fetchGifs = (query = "dogs") => {
        fetch(`https://api.giphy.com/v1/gifs/search?q=${query}&api_key=dc6zaTOxFJmzC&rating=g`)
        .then(response => response.json())
        .then(json => {
            const gifs = []
            for (let i = 0; i < 3; i++) {
                gifs.push(json.data[i].images.original.url)
            }

            this.setState({
                gifList: gifs
            })

        })
    }

    componentDidMount() {
        this.fetchGifs()
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                <div className="col-sm-12 col-md-4">
                    <GifSearch fetchAPI={this.fetchGifs}/>
                </div>
                <div className="col-sm-12 col-md-8">
                    <GiftList gifs={this.state.gifList}/>
                </div>
                
                
                </div>
            </div>
        )
    }
}

export default GifListContainer
