// Write your code here
import {Component} from 'react'

import Message from '../Message'
import Login from '../Login'
import Logout from '../Logout'

import './index.css'

class Home extends Component {
  state = {isLoggedIn: false}

  onLoginToggle = () => {
    this.setState(prev => ({isLoggedIn: !prev.isLoggedIn}))
  }

  render() {
    const {isLoggedIn} = this.state

    return (
      <div className="home-container">
        <div className="message-container">
          <Message isLoggedIn={isLoggedIn} />
          {isLoggedIn ? (
            <Logout onLogout={this.onLoginToggle} />
          ) : (
            <Login onLogin={this.onLoginToggle} />
          )}
        </div>
      </div>
    )
  }
}

export default Home
