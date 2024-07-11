// Write your code here
import {Component} from 'react'
import DestinationItem from '../DestinationItem'
import './index.css'

class DestinationSearch extends Component {
  state = {searchInput: ''}

  onSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  render() {
    const {destinationsList} = this.props
    const {searchInput} = this.state
    const searchValue = searchInput.toLowerCase()

    const filteredList = destinationsList.filter(destination =>
      destination.name.toLowerCase().includes(searchValue),
    )

    return (
      <div className="destination-search-container">
        <h1 className="heading">Destination Search</h1>

        <div className="search-container">
          <input
            type="search"
            placeholder="search"
            onChange={this.onSearchInput}
            value={searchValue}
          />
          <img
            src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png "
            alt="search icon"
            className="icon"
          />
        </div>

        <ul className="destination-container">
          {filteredList.map(each => (
            <DestinationItem
              key={each.id}
              name={each.name}
              image={each.imgUrl}
            />
          ))}
        </ul>
      </div>
    )
  }
}

export default DestinationSearch
