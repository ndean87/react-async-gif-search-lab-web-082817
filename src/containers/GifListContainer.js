import React, {Component} from 'react'
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

export default class GifListContainer extends Component {
  constructor(){
    super()

    this.state = {
      gifs: [],
      searchInput: ''
    }
  }


  handleFetch = (searchInputText) => {
    fetch(`http://api.giphy.com/v1/gifs/search?q=${searchInputText}&api_key=dc6zaTOxFJmzC`)
    .then(res => res.json())
    .then(json => {
      this.setState({
        gifs: json.data
      })
    })
  }


  render(){
    return(
      <div>
        < GifList gifs={this.state.gifs}/>
        < GifSearch handleFetch={this.handleFetch}/>
      </div>
    )
  }

}
