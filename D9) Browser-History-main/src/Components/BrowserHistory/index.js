import {Component} from 'react'
import SearchItem from '../SearchItem'

import './index.css'

class BrowserHistory extends Component {
  state = {searchInput: '', historyList: []}

  componentDidMount() {
    const {initialHistoryList} = this.props
    this.setState({historyList: initialHistoryList})
  }

  updateSearch = event => {
    this.setState({searchInput: event.target.value})
  }

  filteredHistoryList = () => {
    const {searchInput, historyList} = this.state
    const updatedHistory = historyList.filter(each =>
      each.title.toLowerCase().includes(searchInput.toLowerCase()),
    )
    return updatedHistory
  }

  deleteHistory = id => {
    const {historyList} = this.state
    this.setState({historyList: historyList.filter(each => each.id !== id)})
  }

  render() {
    const {searchInput} = this.state

    const filteredHistoryList = this.filteredHistoryList()

    return (
      <div>
        <div className="history-background-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/history-website-logo-img.png"
            alt="app logo"
            className="logo-style"
          />

          <div className="search-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/search-img.png"
              alt="search"
              className="search-icon"
            />
            <input
              type="search"
              className="user-input"
              value={searchInput}
              onChange={this.updateSearch}
            />
          </div>
        </div>

        <ul className="history-search-container">
          {filteredHistoryList.length !== 0 ? (
            filteredHistoryList.map(each => (
              <SearchItem
                key={each.id}
                history={each}
                deleteHistory={this.deleteHistory}
              />
            ))
          ) : (
            <p>There is no history to show</p>
          )}
        </ul>
      </div>
    )
  }
}

export default BrowserHistory
