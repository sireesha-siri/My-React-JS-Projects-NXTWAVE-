// Write your code here
import {Component} from 'react'
import './index.css'

class CoinToss extends Component {
  state = {
    total: 0,
    heads: 0,
    tails: 0,
    isHead: true,
  }

  tossCoin = () => {
    const tossResult = Math.floor(Math.random() * 2)

    if (tossResult === 0) {
      this.setState(prevState => ({
        isHead: true,
        total: prevState.total + 1,
        heads: prevState.heads + 1,
      }))
    } else if (tossResult === 1) {
      this.setState(prevState => ({
        isHead: false,
        total: prevState.total + 1,
        tails: prevState.tails + 1,
      }))
    }
  }

  render() {
    const {isHead, total, heads, tails} = this.state
    const imageUrl =
      isHead === true
        ? 'https://assets.ccbp.in/frontend/react-js/heads-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/tails-img.png'

    return (
      <div className="app-container">
        <div className="coin-container">
          <h1 className="heading">Coin Toss Game</h1>
          <p className="description">Heads (or) Tails</p>

          <div className="image-container">
            <img
              src={imageUrl}
              alt="toss result"
              className="toss-result-image"
            />
          </div>

          <button type="button" className="toss-button" onClick={this.tossCoin}>
            Toss Coin
          </button>
          <div className="points-container">
            <p>Total: {total}</p>
            <p>Heads: {heads}</p>
            <p>Tails: {tails}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default CoinToss
