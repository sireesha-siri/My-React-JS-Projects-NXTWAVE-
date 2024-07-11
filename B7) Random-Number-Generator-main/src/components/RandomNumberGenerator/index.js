// Write your code here
import {Component} from 'react'
import './index.css'

class RandomNumberGenerator extends Component {
  state = {count: 0}

  generateRandomNumber = () => {
    const randomNumber = Math.ceil(Math.random() * 100)
    return this.setState({count: randomNumber})
  }

  render() {
    const {count} = this.state
    return (
      <div className="background-container">
        <div className="main-container">
          <h1 className="heading">Random Number</h1>
          <p className="description">
            Generate a random number in the range of 0 to 100
          </p>
          <button
            type="button"
            className="button-style"
            onClick={this.generateRandomNumber}
          >
            Generate
          </button>
          <p className="count">{count}</p>
        </div>
      </div>
    )
  }
}

export default RandomNumberGenerator
