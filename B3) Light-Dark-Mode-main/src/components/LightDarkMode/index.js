// Write your code here
import './index.css'
import {Component} from 'react'

class LightDarkMode extends Component {
  state = {isDarkMode: true}

  buttonStatus = () => {
    this.setState(prev => ({isDarkMode: !prev.isDarkMode}))
  }

  render() {
    const {isDarkMode} = this.state
    const mode = !isDarkMode ? 'Dark Mode' : 'Light Mode'
    const containerMode = isDarkMode
      ? 'dark-mode-container'
      : 'light-mode-container'
    const headingStyle = isDarkMode ? 'light-heading' : 'dark-heading'

    return (
      <div className="background-container">
        <div className={containerMode}>
          <h1 className={headingStyle}>Click To Change Mode</h1>
          <button
            type="button"
            onClick={this.buttonStatus}
            className="button-style"
          >
            {mode}
          </button>
        </div>
      </div>
    )
  }
}

export default LightDarkMode
