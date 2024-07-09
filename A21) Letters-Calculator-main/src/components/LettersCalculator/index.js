// Write your code here.
import {Component} from 'react'
import './index.css'

class LettersCalculator extends Component {
  state = {searchInput: ''}

  updateText = event => {
    this.setState({searchInput: event.target.value})
  }

  render() {
    const {searchInput} = this.state
    const searchValue = searchInput.toLowerCase()
    const count = searchValue.length

    return (
      <div className="background-container">
        <div className="calculator-container">
          <h1 className="heading">Calculate the Letters you enter</h1>
          <label htmlFor="user-input" className="label-style">
            Enter the phrase
          </label>
          <input
            id="user-input"
            type="text"
            placeholder="Enter the phrase"
            className="user-input"
            onChange={this.updateText}
            value={searchValue}
          />
          <p className="letters-count">No.of letters: {count}</p>
        </div>

        <img
          src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
          alt="letters calculator"
          className="image-style"
        />
      </div>
    )
  }
}

export default LettersCalculator
