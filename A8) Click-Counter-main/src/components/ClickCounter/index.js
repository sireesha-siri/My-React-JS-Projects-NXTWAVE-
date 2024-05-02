// Write your code here
import './index.css'
import {Component} from 'react'

class ClickCounter extends Component {
  state = {count: 0}

  increaseButton = () => {
    this.setState(prevState => ({count: prevState.count + 1}))
  }

  render() {
    const {count} = this.state

    return (
      <div className="click-counter-background">
        <h1 className="heading">
          The Button has been clicked <span> {count} </span>times
        </h1>
        <p className="description">Click the button to increase the count!</p>
        <button className="button-style" onClick={this.increaseButton}>
          Click Me
        </button>
      </div>
    )
  }
}

export default ClickCounter
