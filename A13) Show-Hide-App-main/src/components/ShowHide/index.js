// Write your code here
import './index.css'
import {Component} from 'react'

class ShowHide extends Component {
  state = {firstName: false, lastName: false}

  showAndHideFirstName = () => {
    this.setState(prev => ({firstName: !prev.firstName}))
  }

  showAndHideLastName = () => {
    this.setState(prev => ({lastName: !prev.lastName}))
  }

  render() {
    const {firstName, lastName} = this.state

    const FirstName = firstName ? 'Joe' : null
    const FirstNameContainer = firstName ? 'name-container' : null

    const LastName = lastName ? 'Jonas' : null
    const LastNameContainer = lastName ? 'name-container' : null

    return (
      <div className="container">
        <h1 className="heading">Show/Hide</h1>
        <div className="show-hide-container">
          <div className="mini-container">
            <button
              type="button"
              className="button-style"
              onClick={this.showAndHideFirstName}
            >
              Show/Hide Firstname
            </button>
            <p className={FirstNameContainer}>{FirstName}</p>
          </div>

          <div className="mini-container">
            <button
              type="button"
              className="button-style"
              onClick={this.showAndHideLastName}
            >
              Show/Hide Lastname
            </button>
            <p className={LastNameContainer}>{LastName}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default ShowHide
