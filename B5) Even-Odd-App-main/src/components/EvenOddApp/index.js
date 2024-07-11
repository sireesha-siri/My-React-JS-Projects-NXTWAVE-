// Write your code here
import './index.css'
import {Component} from 'react'

class EvenOddApp extends Component {
  state = {count: 0}

  increaseValue = () => {
    const randomNumber = Math.ceil(Math.random() * 100)
    this.setState(prev => ({count: prev.count + randomNumber}))
  }

  render() {
    const {count} = this.state
    const status = count % 2 === 0 ? 'Even' : 'Odd'

    return (
      <div className="even-odd-background-container">
        <div className="even-odd-status-container">
          <h1 className="count-heading">Count {count}</h1>
          <p className="status-description">Count is {status}</p>
          <button
            className="button-style"
            type="button"
            onClick={this.increaseValue}
          >
            Increment
          </button>
          <p className="description">
            *increase By Random Number Between 0 to 100
          </p>
        </div>
      </div>
    )
  }
}

export default EvenOddApp
