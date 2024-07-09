// Write your code here
import {Component} from 'react'
import SuggestionItem from '../SuggestionItem'

import './index.css'

class GoogleSuggestions extends Component {
  state = {searchInput: ''}

  updateSearch = suggestion => {
    this.setState({
      searchInput: suggestion,
    })
  }

  onSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  render() {
    const {searchInput} = this.state
    const {suggestionsList} = this.props

    const searchValue = searchInput.toLowerCase()

    const filteredList = suggestionsList.filter(each =>
      each.suggestion.toLowerCase().includes(searchValue),
    )

    return (
      <div className="google-search-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
          alt="google logo"
          className="google-logo"
        />

        <div className="search-box-container">
          <div className="search-box">
            <img
              src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
              alt="search icon"
              className="search-icon-symbol"
            />
            <input
              className="search-input"
              type="search"
              value={searchValue}
              onChange={this.onSearchInput}
              placeholder="Search Google"
            />
          </div>

          <ul className="search-item-container">
            {filteredList.map(each => (
              <SuggestionItem
                key={each.id}
                suggestion={each.suggestion}
                id={each.id}
                updateSearch={this.updateSearch}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default GoogleSuggestions
