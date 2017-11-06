import React from 'react'


class GifSearch extends React.Component {
  state = {
      searchInput: '',
    }

  handleInputChange = (event) => {
    this.setState({
      searchInput: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.handleFetch(this.state.searchInput)
  }

  render() {
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="text" onChange={this.handleInputChange} placeholder="enter a word!"/>
          <button>Search Gifs</button>
        </form>
      </div>
    )}
}

export default GifSearch
